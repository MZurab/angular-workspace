import {Injectable} from '@angular/core';
import {BehaviorSubject, interval, Observable} from "rxjs";
import {
  MzDefaultResponseDefaultFormatForCheckHashType, MzDefaultResponseDefaultFormatForGetDictionaryType,
  MzDictionarySnapshotType
} from "../res/@abstract/@type/mz-common.type";
import {
  MzDictionaryInputTypeEnum,
  MzDictionaryNeedTypeEnum,
  MzLanguageEnum
} from "../res/@abstract/@enum/mz-common.enum";
import {MzTransportControllerService} from "./mz-transport-controller.service";
import {MzDictionaryServiceInterface} from "../res/@abstract/@interface/mz-dictionary-service.interface";
import {MzDictionaryController} from "../res/mz-dictionary.controller";
import {MzDictionaryAbstractClass} from "../res/@abstract/@class/mz-dictionary.abstract.class";

@Injectable()
export class MzDictionaryService implements MzDictionaryServiceInterface{
  //@required - static data (get when import module by forRoot method)
  public static type: MzDictionaryInputTypeEnum;
  public static url: string;

  public snapshot: MzDictionarySnapshotType;
  public subscription$: BehaviorSubject<MzDictionarySnapshotType>;

  constructor (
    private transportController: MzTransportControllerService
  ) {
    this.updateSnapshot();
    // get initial state from local storage
    this.subscription$ = new BehaviorSubject(this.snapshot);
    // run interval
    this.run();
  }

  // run
  private run () {
    this.actualizeDictionary().subscribe(()=>{});

    interval(MzDictionaryAbstractClass.syncInterval).subscribe(
      () => {
        this.actualizeDictionary().subscribe(
          () => {}
        )
      }
    );
  }

  // get data from local storage
  private getData (): MzDictionarySnapshotType {
    const r: MzDictionarySnapshotType = {
        dictionary  : MzDictionaryController.Dictionary.getDictionary(),
        hash        : MzDictionaryController.Dictionary.getHash(),
        lang        : MzDictionaryController.Dictionary.getLang(),
        syncTime    : MzDictionaryController.Dictionary.getSyncTime(),
        ready       : MzDictionaryController.Dictionary.isReady()
    };
    return r;
  }

  // get data from local storage and update
  private updateSnapshot (emit = false) {
    this.snapshot = this.getData();
    if(emit) this.subscription$.next(this.snapshot);
  }

  // actulise dictionary
  actualizeDictionary (): Observable<MzDictionarySnapshotType> {
    return Observable.create(
      (observer) => {
        // update data from storage
        this.updateSnapshot();

        // if we have not hash (first invoke) OR sync time passed -> load dictionary
        if (!this.snapshot.hash) {
          this.loadDictionary().subscribe(
            () => {
              observer.next(this.snapshot);
            }
          );
        } else if(!this.snapshot.ready) {
          // we have
          this.loadHash().subscribe(
            (hash:string) => {
              if (this.getHash() !== hash) {
                // we have new hash -> load dictionary
                this.loadDictionary().subscribe(()=>{
                  observer.next(this.snapshot);
                  observer.complete();
                });
              } else {
                // we have not new hash -> save sync time
                MzDictionaryController.Dictionary.saveSyncTime();
                // save data
                this.updateSnapshot(true);


                observer.next(this.snapshot);
                observer.complete();
              }
            }
          )
        } else {
          observer.next(this.snapshot);
          observer.complete();
        }
      }
    );
  }

  // load dictionary
  private loadDictionary (): Observable<boolean> {
    return Observable.create(
      (observer) => {
        this.transportController.transport.query(MzDictionaryNeedTypeEnum.dictionary).subscribe(
          (response: MzDefaultResponseDefaultFormatForGetDictionaryType) => {
            // let response: MzDefaultResponseDefaultFormatForGetDictionaryType = answer.data.getDictionary;
            if (response && response.status && response.dictionary.length > 0) {
              // need save dictionary -> save sync time
              let dictionary = MzDictionaryController.Dictionary.convertResponseToRightFormat(response);
              // save dictionary
              MzDictionaryController.Dictionary.saveDictionary(dictionary);
              // update hash
              MzDictionaryController.Dictionary.saveHash(response.hash);
              // set new sync time
              MzDictionaryController.Dictionary.saveSyncTime();
              // save default language
              MzDictionaryController.Dictionary.saveDefaultLang(response.defaultLanguage);

              // update service data with emmit new date
              this.updateSnapshot(true);
              // success - emit true and complete
              observer.next(true);
              observer.complete();
            } else {
              // false - emit false and complete
              observer.next(false);
              observer.complete();
            }

          }
        )
      }
    );
  }

  // load hash
  private loadHash (): Observable<string> {
    return Observable.create(
      (observer) => {
        if (!MzDictionaryController.Dictionary.isReady()) {
          this.transportController.transport.query(MzDictionaryNeedTypeEnum.hash).subscribe(
            (responce: MzDefaultResponseDefaultFormatForCheckHashType) => {
              let hash = (responce && responce.hash) ? responce.hash : '';
              observer.next(hash);
              observer.complete();
            }
          )
        }
      }
    )
  }

  //
  public changeLang(lang: MzLanguageEnum): void {
    // save lang
    MzDictionaryController.Dictionary.saveLang(lang);
    // update with emit
    this.updateSnapshot(true);
  }

  public forceUpdateDictionary(): void {
    this.loadDictionary();
  }

  public getDictionary(): any {
    return MzDictionaryController.Dictionary.getDictionary();
  }

  public getHash(): string {
    return MzDictionaryController.Dictionary.getHash();
  }

  public getLang(): MzLanguageEnum {
    return MzDictionaryController.Dictionary.getLang();
  }

  public getLastSyncTime(): Date {
    return MzDictionaryController.Dictionary.getSyncTime();
  }
}

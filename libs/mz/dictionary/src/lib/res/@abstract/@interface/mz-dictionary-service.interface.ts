import {MzLanguageEnum} from "../@enum/mz-common.enum";
import {MzDictionarySnapshotType} from "../@type/mz-common.type";
import {BehaviorSubject, Observable} from "rxjs";

export interface MzDictionaryServiceInterface {
  changeLang(lang: MzLanguageEnum): void
  getLastSyncTime(): Date
  actualizeDictionary(): Observable<MzDictionarySnapshotType>
  forceUpdateDictionary(): void
  getLang(): MzLanguageEnum
  getHash(): string
  getDictionary(): any

  subscription$: BehaviorSubject<MzDictionarySnapshotType>;
}

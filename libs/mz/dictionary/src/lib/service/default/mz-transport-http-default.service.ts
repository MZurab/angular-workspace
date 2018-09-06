import {MzTransportInterface} from "../../res/@abstract/@interface/mz-transport.interface";
import {MzDictionaryNeedTypeEnum, MzLanguageEnum} from "../../res/@abstract/@enum/mz-common.enum";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "../../../../../../../node_modules/@angular/common/http";
import {MzDictionaryService} from "../mz-dictionary.service";

export class MzTransportHttpDefaultService implements MzTransportInterface{

  constructor (
    private http: HttpClient
  ) {
  }

  query(need: MzDictionaryNeedTypeEnum, lang: MzLanguageEnum): Observable<any> {
    if (need === MzDictionaryNeedTypeEnum.dictionary) {
      return this.httpQueryForGetDictionary(lang)
    } else if (need === MzDictionaryNeedTypeEnum.hash) {
      return this.httpQueryForGetHash()
    }
  }

  // http query for get hash
  private httpQueryForGetHash (): Observable<any> {
    return this.http.get(MzDictionaryService.url,{params: {need: 'hash'}},);
  }

  private httpQueryForGetDictionary (lang): Observable<any> {
    return this.http.get(MzDictionaryService.url, {params: {need: 'dictionary', lang}});
  }

}

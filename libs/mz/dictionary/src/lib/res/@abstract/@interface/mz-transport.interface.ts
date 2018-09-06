import {MzDictionaryNeedTypeEnum, MzLanguageEnum} from "../@enum/mz-common.enum";
import {Observable} from "rxjs";

export interface MzTransportInterface {
  query(need: MzDictionaryNeedTypeEnum, lang?: MzLanguageEnum): Observable<any>
}

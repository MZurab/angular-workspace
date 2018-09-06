import {MzTransportInterface} from "../../res/@abstract/@interface/mz-transport.interface";
import {MzDictionaryNeedTypeEnum, MzLanguageEnum} from "../../res/@abstract/@enum/mz-common.enum";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Apollo, gql} from "apollo-angular-boost";
import {map} from "rxjs/operators";
import {
  MzDefaultResponseDefaultFormat, MzDefaultResponseDefaultFormatForCheckHashType,
  MzDefaultResponseDefaultFormatForGetDictionaryType
} from "../../res/@abstract/@type/mz-common.type";

@Injectable()
export class MzTransportGraphqlDefaultClass implements MzTransportInterface {

  constructor (
      private apollo: Apollo
  ) {
  }

  public query(need: MzDictionaryNeedTypeEnum, lang: MzLanguageEnum): Observable<MzDefaultResponseDefaultFormat> {
    console.log('MzTransportGraphqlDefaultClass - query', need);
    if (need === MzDictionaryNeedTypeEnum.dictionary) {
      return this.graphQlQueryForGetDictionary(lang)
    } else if (need === MzDictionaryNeedTypeEnum.hash) {
      return this.graphQlQueryForGetHash()
    }

    return undefined;
  }

  // add download by graphql
  private graphQlQueryForGetHash (): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
          {
            getDictionary {
              status
              hash
            }
          }
        `,
    }).valueChanges.pipe(map((result: any) => result.data && result.data.getDictionaryHash));;
  }

  // add download by graphql
  private graphQlQueryForGetDictionary (lang): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        {
          getDictionary{
            status,
            hash,
            includedLanguages,
            possibleLanguages,
            defaultLanguage,
            dictionary {
              key,
              value {
                en,
                ru
              }
            }
          }
        }
        `,
    }).valueChanges.pipe(map((result: any) => result.data && result.data.getDictionary));
  }

}

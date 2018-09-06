import {MzLanguageEnum} from "../@enum/mz-common.enum";

export interface MzDictionaryInterface {
  getWord (key: string, lang: any): string

  getHash (): string
  saveHash(hash: string): void

  isReady(): boolean;

  getSyncTime (): Date
  saveSyncTime(time?: Date): void

  getLang(): MzLanguageEnum;
  getClientLang(): MzLanguageEnum;
  saveLang(lang: MzLanguageEnum);

  saveDictionary(dictionary: any): void
  getDictionary(): any

  convertResponseToRightFormat (responce: any): any
  checkResponse (responce: any): boolean

  needLoadDictionary(hash: string): boolean

  savePossibleLanguages(langs: MzLanguageEnum[])
  getPossibleLanguages(): MzLanguageEnum[]

  saveImportedLanguages(langs: MzLanguageEnum[])
  getImportedLanguages(): MzLanguageEnum[]

  getDefaultLang(): MzLanguageEnum;
  saveDefaultLang(lang: MzLanguageEnum | string);
}

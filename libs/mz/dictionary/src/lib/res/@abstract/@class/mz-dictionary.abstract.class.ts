import {MzDictionaryInterface} from "../@interface/mz-dictionary.interface";
import {MzLanguageEnum} from "../@enum/mz-common.enum";
// import {MzDictionaryService} from "../../../service/mz-dictionary.service";
import * as mzCommon from 'mz-common';
import {
  MzDefaultResponseDefaultFormatForCheckHashType,
  MzDefaultResponseDefaultFormatForGetDictionaryType
} from "../@type/mz-common.type";
import {MzStorageController} from "../../mz-storage.controller";

declare var navigator: any;

export abstract class MzDictionaryAbstractClass implements MzDictionaryInterface{
  //@optional - set default params (can change by passed when import module by forRoot method)
  public static syncInterval: number                    = (1/6 * 60 * 60) * 1000; // every 10 minutes
  // public static defaultLanguage: MzLanguageEnum | null  = null;

  public keyLang = 'lang';
  public keyDeafultLang = 'deafultLang';
  public keyHash = 'hash';
  public keyDictionary = 'dictionary';
  public keySyncTime = 'syncTime';
  public keyImportedLanguages = 'importedLanguages';
  public keyPossibleLanguages = 'possibleLanguages';
  public noneFoundReturn = '';

  getHash(): string {
    return MzStorageController.Storage.get(this.keyHash) || '';
  }

  saveHash(hash: string) {
    MzStorageController.Storage.save(this.keyHash, hash);
  }

  // get language with init if not
  getLang(): MzLanguageEnum {
    let result =  MzStorageController.Storage.get(this.keyLang);
    if (!result) {
      result = this.getClientLang();
      this.saveLang(result);
    }
    return result;
  }

  getClientLang(): MzLanguageEnum {
    let userLang = navigator.language || navigator.userLanguage;

    // for firefox and safari
    if(userLang == 'ru-RU') userLang = 'ru';
    if(userLang == 'en-US') userLang = 'en';

    switch ( userLang ) {
      case "en":
        // if language English
        userLang = MzLanguageEnum.en;
        break;

      default:
        // default language Russian
        userLang = MzLanguageEnum.ru;
    }

    // return language
    return userLang;
  }

  saveLang(lang: MzLanguageEnum): void {
    MzStorageController.Storage.save(this.keyLang, lang);
  }

  getWord(key: string, lang: any): string {
    let dictionary = this.getDictionary(), result;
    if (dictionary) result = mzCommon.mz.getValueFromObjectByPath(key + '.$',dictionary);
    if ( result ) {
      if (result[lang] ) {
        result = result[lang];
      } else if (lang != this.getDefaultLang() && this.getDefaultLang()) {
        // we have not this language but we have default language -> get by default
        result = result[this.getDefaultLang()]
      }
    }

    return (typeof result === 'string') ? result : this.noneFoundReturn;
  }

  getDictionary(): any {
    return MzStorageController.Storage.get(this.keyDictionary);
  }

  saveDictionary(dictionary: any) {
    MzStorageController.Storage.save(this.keyDictionary, dictionary);
  }

  checkResponse(responce: MzDefaultResponseDefaultFormatForCheckHashType): boolean {
    return (responce && responce.status);
  }

  convertResponseToRightFormat(responce: MzDefaultResponseDefaultFormatForGetDictionaryType): any {
    let result = {};
    for (let el of responce.dictionary ) {
      mzCommon.mz.addValueToObjectByPath(result, el.key + '.$', el.value);
    }
    return result;
  }

  needLoadDictionary(hash: string): boolean {
    return (hash && hash === this.getHash());
  }

  getSyncTime(): Date {
    let time =  parseInt(MzStorageController.Storage.get(this.keySyncTime), 10);
    if(isNaN(time)) time = 0;
    return new Date(time);
  }

  saveSyncTime(time: Date = new Date()): void {
    let stringTime = time.getTime();
    MzStorageController.Storage.save(this.keySyncTime, stringTime);
  }

  isReady(): boolean {
    return (new Date().getTime() - this.getSyncTime().getTime()) < MzDictionaryAbstractClass.syncInterval;
  }

  getImportedLanguages(): MzLanguageEnum[] {
    return MzStorageController.Storage.get(this.keyImportedLanguages) || [];
  }

  getPossibleLanguages(): MzLanguageEnum[] {
    return MzStorageController.Storage.get(this.keyPossibleLanguages) || [];
  }

  saveImportedLanguages(langs: MzLanguageEnum[]) {
    MzStorageController.Storage.save(this.keyImportedLanguages, langs);
  }

  savePossibleLanguages(langs: MzLanguageEnum[]) {
    MzStorageController.Storage.save(this.keyPossibleLanguages, langs);
  }

  getDefaultLang(): MzLanguageEnum {
    return MzStorageController.Storage.get(this.keyDeafultLang);
  }

  saveDefaultLang(lang: MzLanguageEnum | string) {
    MzStorageController.Storage.save(this.keyDeafultLang, lang);
  }

}

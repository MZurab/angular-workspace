import {MzDictionaryInputTypeEnum, MzLanguageEnum} from "../@enum/mz-common.enum";
import {MzDictionaryInterface} from "../@interface/mz-dictionary.interface";
import {MzStorageInterface} from "../@interface/mz-storage.interface";
import {MzTranslatorInterface} from "../@interface/mz-translator.interface";

export type MzDictionaryType = {
  [s: string]: {
    // @ts-ignore
    $?: {
      [s: string]: string
    },
    [s: string]: MzDictionaryType
  }
}
//
export type MzDictionarySnapshotType = {
  lang: MzLanguageEnum,
  dictionary: MzDictionaryType,
  hash: string,
  ready: boolean,
  syncTime: Date
};

export type MzDictionaryInputType = {
  url: string,
  type: MzDictionaryInputTypeEnum,

  syncInterval?: number,
  translator?: MzTranslatorInterface,
  storage?: MzStorageInterface,
  dictionary?: MzDictionaryInterface
}

export type MzDefaultResponseDefaultFormatForCheckHashType = {
  status: boolean,
  hash: string
}

export type MzDefaultResponseDefaultFormatForGetDictionaryType = {
  status: boolean,
  dictionary: {key: string, value: string | number }[],
  includedLanguages: MzLanguageEnum[],
  possibleLanguages: MzLanguageEnum[],
  defaultLanguage: string | null,
  hash: string
}

export type MzDefaultResponseDefaultFormat = MzDefaultResponseDefaultFormatForCheckHashType | MzDefaultResponseDefaultFormatForGetDictionaryType

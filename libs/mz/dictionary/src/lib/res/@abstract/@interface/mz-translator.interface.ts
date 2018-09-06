import {MzLanguageEnum} from "../@enum/mz-common.enum";
import {MzDictionaryInterface} from "./mz-dictionary.interface";

export interface MzTranslatorInterface {
  translate (mask: string, language: MzLanguageEnum): string;
  getMather(): RegExp
}

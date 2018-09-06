import {MzDictionaryInterface} from "./@abstract/@interface/mz-dictionary.interface";
import {MzDictionaryDefaultClass} from "./default/mz-dictionary-default.class";
import {MzLanguageEnum} from "./@abstract/@enum/mz-common.enum";

export class MzDictionaryController {
  public static Dictionary: MzDictionaryInterface       = new MzDictionaryDefaultClass();
}

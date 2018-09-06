import {MzTranslatorInterface} from "../@interface/mz-translator.interface";
import {MzLanguageEnum} from "../@enum/mz-common.enum";
import {MzDictionaryController} from "../../mz-dictionary.controller";

export abstract class MzTranslatorAbstractClass implements MzTranslatorInterface {
  public prefix: string = "\\[\\[";
  public postfix: string = "\\]\\]";

  public getMather(): RegExp {
    return new RegExp(this.prefix + "[a-zA-Z0-9\\-\\+]*" + this.postfix, 'g');
  }

  public translate (content: string, language: MzLanguageEnum) {

    let result = content,
      arrWithKeys = result.match( this.getMather());
    //  add guard
    if (Array.isArray(arrWithKeys)) {
      for(let el of arrWithKeys) {
        // clear of postfix or prefix
        let clearedMaskKey  = el.replace(new RegExp(`[${this.prefix}+${this.postfix}]`, 'g'),''),
          newValue        = MzDictionaryController.Dictionary.getWord(clearedMaskKey, language);

        // replace value
        result = result.replace(el, newValue);
      }
    }

    return result;
  }

}

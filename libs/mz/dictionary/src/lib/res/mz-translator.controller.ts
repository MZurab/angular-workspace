import {MzTranslatorInterface} from "./@abstract/@interface/mz-translator.interface";
import {MzTranslatorDefaultClass} from "./default/mz-translator-default.class";

export class MzTranslatorController {
  public static Translator: MzTranslatorInterface       = new MzTranslatorDefaultClass();
}

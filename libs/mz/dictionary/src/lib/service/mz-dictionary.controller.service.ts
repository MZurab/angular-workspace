import {Inject, Injectable} from "@angular/core";
import {MzStorageDefaultClass} from "../res/default/mz-storage-default.class";
import {MzDictionaryDefaultClass} from "../res/default/mz-dictionary-default.class";

@Injectable()
export class MzDictionaryControllerService {
  public dictionary;

  constructor (
    @Inject('initialValue') public moduleInitialValue
  ) {
    this.dictionary = (moduleInitialValue.dictionary) ? moduleInitialValue.dictionary : new MzDictionaryDefaultClass();
  }
}

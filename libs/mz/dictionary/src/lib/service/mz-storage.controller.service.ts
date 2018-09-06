import {Inject, Injectable} from "@angular/core";
import {MzStorageInterface} from "../res/@abstract/@interface/mz-storage.interface";
import {MzStorageDefaultClass} from "../res/default/mz-storage-default.class";
import {MzTranslatorDefaultClass} from "../res/default/mz-translator-default.class";

@Injectable()
export class MzStorageControllerService {
  public storage;

  constructor (
    @Inject('initialValue') public moduleInitialValue
  ) {
    this.storage = (moduleInitialValue.storage) ? moduleInitialValue.storage : new MzStorageDefaultClass();
  }
}

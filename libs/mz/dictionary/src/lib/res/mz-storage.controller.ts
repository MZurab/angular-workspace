import {MzStorageInterface} from "./@abstract/@interface/mz-storage.interface";
import {MzStorageDefaultClass} from "./default/mz-storage-default.class";

export class MzStorageController {
  public static Storage: MzStorageInterface             = new MzStorageDefaultClass();
}

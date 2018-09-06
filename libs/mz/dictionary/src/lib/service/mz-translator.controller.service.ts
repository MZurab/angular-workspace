import {Inject, Injectable} from "@angular/core";
import {MzTranslatorInterface} from "../res/@abstract/@interface/mz-translator.interface";
import {MzTranslatorDefaultClass} from "../res/default/mz-translator-default.class";
import {MzTransportControllerService} from "./mz-transport-controller.service";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class MzTranslatorControllerService {

  public translator;

  constructor (
    @Inject('initialValue') public moduleInitialValue
  ) {
    this.translator = (moduleInitialValue.translator) ? moduleInitialValue.translator : new MzTranslatorDefaultClass();
  }

}

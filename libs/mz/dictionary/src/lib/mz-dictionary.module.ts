import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MzDictionaryDirective} from "./directive/mz-dictionary.directive";
import {ApolloBoost, ApolloBoostModule} from "apollo-angular-boost";
import {HttpClientModule} from "@angular/common/http";
import {MzDictionaryService} from "./service/mz-dictionary.service";
import {MzDictionaryInputTypeEnum} from "./res/@abstract/@enum/mz-common.enum";
import {MzDictionaryInputType} from "./res/@abstract/@type/mz-common.type";
import {MzTransportControllerService} from "./service/mz-transport-controller.service";
import {MzTransportGraphqlDefaultClass} from "./service/default/mz-transport-graphql-default.service";
import {MzDictionaryAbstractClass} from "./res/@abstract/@class/mz-dictionary.abstract.class";
import {MzDictionaryController} from "./res/mz-dictionary.controller";
import {MzStorageController} from "./res/mz-storage.controller";
import {MzTranslatorController} from "./res/mz-translator.controller";
import {MzTranslatorControllerService} from "./service/mz-translator.controller.service";
@NgModule({
  imports: [
    CommonModule,
    ApolloBoostModule,
    HttpClientModule
  ],
  declarations: [
    MzDictionaryDirective
  ],
  exports: [
    MzDictionaryDirective
  ],
  providers: [
    MzDictionaryService,
    MzTransportControllerService,
    MzTransportGraphqlDefaultClass
  ]
})
export class MzDictionaryModule {
  constructor (
    boost: ApolloBoost,
    @Inject('mzDictionaryConfig') public MzDictionaryInitialValue: MzDictionaryInputType,
  ) {
    // save data
    MzDictionaryService.type  = MzDictionaryInitialValue.type;
    MzDictionaryService.url   = MzDictionaryInitialValue.url;

    // set if passed custom classes
    if (MzDictionaryInitialValue.translator)   MzTranslatorController.Translator    = MzDictionaryInitialValue.translator;
    if (MzDictionaryInitialValue.storage)      MzStorageController.Storage          = MzDictionaryInitialValue.storage;
    if (MzDictionaryInitialValue.dictionary)   MzDictionaryController.Dictionary    = MzDictionaryInitialValue.dictionary;
    // set if passed custom vars
    if (MzDictionaryInitialValue.syncInterval) MzDictionaryAbstractClass.syncInterval  = MzDictionaryInitialValue.syncInterval;

    switch (MzDictionaryInitialValue.type) {

      case MzDictionaryInputTypeEnum.http:
        //  not nothing
      break;

      case MzDictionaryInputTypeEnum.graphQl:
        //  set graphql url
        boost.create({
          uri: MzDictionaryInitialValue.url
        });
      break;
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MzDictionaryModule,
      providers: [MzDictionaryService, MzTransportControllerService, MzTransportGraphqlDefaultClass]
    };
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {connectAppControllerReducer, initialState} from "./+state/connect-app-controller.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ConnectAppControllerEffects} from "./+state/connect-app-controller.effects";
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      'connectAppController',
      connectAppControllerReducer//,
      // {
      //   initialState: initialState
      // }
    )
    // EffectsModule.forFeature([ConnectAppControllerEffects])
  ]
})
export class ConnectAppControllerModule {}

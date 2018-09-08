import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

// import { ConnectAppControllerState } from './connect-app-controller.reducer';
import {
  // LoadConnectAppController,
  // ConnectAppControllerLoaded,
  // ConnectAppControllerLoadError,
  ConnectAppControllerActionTypes
} from './states/actions/connect-app-controller.actions';

@Injectable()
export class ConnectAppControllerEffects {
  // @Effect()
  // loadConnectAppController$ = this.dataPersistence.fetch(
  //   ConnectAppControllerActionTypes.LoadConnectAppController,
  //   {
  //     run: (
  //       action: LoadConnectAppController,
  //       state: ConnectAppControllerState
  //     ) => {
  //       // Your custom REST 'load' logic goes here. For now just return an empty list...
  //       return new ConnectAppControllerLoaded([]);
  //     },
  //
  //     onError: (action: LoadConnectAppController, error) => {
  //       console.error('Error', error);
  //       return new ConnectAppControllerLoadError(error);
  //     }
  //   }
  // );
  //
  // constructor(
  //   private actions$: Actions,
  //   private dataPersistence: DataPersistence<ConnectAppControllerState>
  // ) {}
}

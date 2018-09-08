import { Action } from '@ngrx/store';
// import { Entity } from '../../connect-app-controller.reducer';

export enum ConnectAppControllerActionTypes {
  appSwitchApp = 'switch-app',

  signIn = 'sign-in',
  confirmSmsCodeForSignIn = 'confirm-sms-code-for-sign-in'
}

// export class LoadConnectAppController implements Action {
//   readonly type = ConnectAppControllerActionTypes.LoadConnectAppController;
// }
//
// export class ConnectAppControllerLoadError implements Action {
//   readonly type = ConnectAppControllerActionTypes.LoadConnectAppController;
//   constructor(public payload: any) {}
// }
//
// export class ConnectAppControllerLoaded implements Action {
//   readonly type = ConnectAppControllerActionTypes.ConnectAppControllerLoaded;
//   constructor(public payload: Entity[]) {}
// }

// export type ConnectAppControllerAction =
// | LoadConnectAppController
// | ConnectAppControllerLoaded
// | ConnectAppControllerLoadError
// | AppSwitchApp
// ;

// export const fromConnectAppControllerActions = {
// LoadConnectAppController,
// ConnectAppControllerLoaded,
// ConnectAppControllerLoadError
// AppSwitchApp
// };

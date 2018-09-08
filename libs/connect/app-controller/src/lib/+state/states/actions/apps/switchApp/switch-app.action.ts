import { Action } from '@ngrx/store';
import { ConnectAppControllerActionTypes } from '../../connect-app-controller.actions';
import { AppsIdEnum } from '../../../../../res/@abstract/@enums/app/apps-id.enum';

export class SwitchAppAction implements Action {
  readonly type = ConnectAppControllerActionTypes.appSwitchApp;
  constructor(public payload: AppsIdEnum) {}
}

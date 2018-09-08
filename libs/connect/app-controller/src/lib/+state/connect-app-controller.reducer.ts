import { ConnectAppControllerInerface } from '../res/@abstract/@interface/app/connect-app-controller.inerface';
import { AppsIdEnum } from '../res/@abstract/@enums/app/apps-id.enum';
import { AngularAppIdEnum } from '../res/@abstract/@enums/app/angular-app-id.enum';
import { ConnectAppControllerActionTypes } from './states/actions/connect-app-controller.actions';
import { SwitchAppReducerAction } from './states/actions/apps/switchApp/switch-app.reducer.action';

/**
 * Interface for the 'ConnectAppController' payload used in
 *  - ConnectAppControllerState, and
 *  - connectAppControllerReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */

// export interface TestNgRxInterface {
//   someData: number[];
// }

// @ts-ignore
export const initialState: any = { //ConnectAppControllerInerface
  apps: {
    storage: {
      [AppsIdEnum.chat]: {
        name: 'Chat',
        id: AppsIdEnum.chat
      },
      [AppsIdEnum.sharepay]: {
        name: 'Sharepay',
        id: AppsIdEnum.sharepay
      },
      [AppsIdEnum.onepay]: {
        name: 'Onepay',
        id: AppsIdEnum.onepay
      },
      [AppsIdEnum.market]: {
        name: 'Market',
        id: AppsIdEnum.market
      },
      [AppsIdEnum.edocument]: {
        name: 'Edocument',
        id: AppsIdEnum.edocument
      }
    },
    list: [
      { id: AppsIdEnum.chat, weight: 1 },
      { id: AppsIdEnum.sharepay, weight: 2 },
      { id: AppsIdEnum.onepay, weight: 3 },
      { id: AppsIdEnum.market, weight: 4 },
      { id: AppsIdEnum.edocument, weight: 5 }
    ],
    currentId: AppsIdEnum.chat
  },
  balance: {
    main: {},
    other: [],
    currentId: ''
  },
  angularAppId: AngularAppIdEnum.web,
  navigationController: [],
  sync: {}
};

export function connectAppControllerReducer(
  state: ConnectAppControllerInerface = initialState, // : ConnectAppControllerInerface
  action: { payload: any; type: string } //ConnectAppControllerAction
) { //: ConnectAppControllerInerface {
  console.log( 'connectAppControllerReducer - state, action', state, action );
  switch (action.type) {
    case ConnectAppControllerActionTypes.appSwitchApp:
      state = SwitchAppReducerAction(state, action);
      break;
  }

  return state;
}

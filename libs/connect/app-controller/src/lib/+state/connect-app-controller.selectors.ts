import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConnectAppControllerInerface } from '../res/@abstract/@interface/app/connect-app-controller.inerface';
import {
  ConnectAppsInterface,
  ConnectAppsListInterface,
  ConnectAppsStorageInterface
} from '../res/@abstract/@interface/app/_sub/app-base.interface';
// import { ConnectAppControllerState } from './connect-app-controller.reducer';

// Lookup the 'ConnectAppController' feature state managed by NgRx
const getConnectAppControllerState = createFeatureSelector<
  ConnectAppControllerInerface
>('connect');

// create
const getApps = createSelector(
  getConnectAppControllerState,
  (state: ConnectAppControllerInerface): ConnectAppsInterface => {
    console.log( 'createSelector - state', state);
    return state.apps;
  }
);

const getCurrentAppId = createSelector(
  getApps,
  (state): string => {
    return state.currentId;
  }
);

const getAppsList = createSelector(
  getApps,
  (state): ConnectAppsListInterface[] => {
    return state.list;
  }
);

const getAppsStorage = createSelector(
  getApps,
  (state): ConnectAppsStorageInterface => {
    return state.storage;
  }
);

// const getTestSelector2 = createSelector(
//   getConnectAppControllerState,
//   (data: any) => data.someData2
// );
//
// const getTestSelector3 = createSelector(
//   getTestSelector2,
//   (data: any) => data.test2
// );

// const getLoaded = createSelector(
//   getConnectAppControllerState,
//   (state: ConnectAppControllerState) => state.loaded
// );
//
// const getError = createSelector(
//   getConnectAppControllerState,
//   (state: ConnectAppControllerState) => state.error
// );
//
// const getAllConnectAppController = createSelector(
//   getConnectAppControllerState,
//   getLoaded,
//   (state: ConnectAppControllerState, isLoaded) => {
//     return isLoaded ? state.list : [];
//   }
// );
// const getSelectedId = createSelector(
//   getConnectAppControllerState,
//   (state: ConnectAppControllerState) => state.selectedId
// );
// const getSelectedConnectAppController = createSelector(
//   getAllConnectAppController,
//   getSelectedId,
//   (connectAppController, id) => {
//     const result = connectAppController.find(it => it['id'] === id);
//     return result ? Object.assign({}, result) : undefined;
//   }
// );

export const ConnectAppControllerSelectors = {
  getApps,
  getAppsList,
  getAppsStorage,
  getCurrentAppId
};

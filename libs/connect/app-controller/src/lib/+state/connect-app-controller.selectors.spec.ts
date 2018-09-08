// import {
//   Entity,
//   ConnectAppControllerState
// } from './connect-app-controller.reducer';
// import { connectAppControllerQuery } from './connect-app-controller.selectors';
//
// describe('ConnectAppController Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getConnectAppControllerId = it => it['id'];
//
//   let storeState;
//
//   beforeEach(() => {
//     const createConnectAppController = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//     storeState = {
//       connectAppController: {
//         list: [
//           createConnectAppController('PRODUCT-AAA'),
//           createConnectAppController('PRODUCT-BBB'),
//           createConnectAppController('PRODUCT-CCC')
//         ],
//         selectedId: 'PRODUCT-BBB',
//         error: ERROR_MSG,
//         loaded: true
//       }
//     };
//   });
//
//   describe('ConnectAppController Selectors', () => {
//     it('getAllConnectAppController() should return the list of ConnectAppController', () => {
//       const results = connectAppControllerQuery.getAllConnectAppController(
//         storeState
//       );
//       const selId = getConnectAppControllerId(results[1]);
//
//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });
//
//     it('getSelectedConnectAppController() should return the selected Entity', () => {
//       const result = connectAppControllerQuery.getSelectedConnectAppController(
//         storeState
//       );
//       const selId = getConnectAppControllerId(result);
//
//       expect(selId).toBe('PRODUCT-BBB');
//     });
//
//     it("getLoaded() should return the current 'loaded' status", () => {
//       const result = connectAppControllerQuery.getLoaded(storeState);
//
//       expect(result).toBe(true);
//     });
//
//     it("getError() should return the current 'error' storeState", () => {
//       const result = connectAppControllerQuery.getError(storeState);
//
//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });

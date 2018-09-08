import { ConnectAppControllerLoaded } from './states/actions/connect-app-controller.actions';
import {
  ConnectAppControllerState,
  Entity,
  initialState,
  connectAppControllerReducer
} from './connect-app-controller.reducer';

describe('ConnectAppController Reducer', () => {
  const getConnectAppControllerId = it => it['id'];
  let createConnectAppController;

  beforeEach(() => {
    createConnectAppController = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid ConnectAppController actions ', () => {
    it('should return set the list of known ConnectAppController', () => {
      const connectAppControllers = [
        createConnectAppController('PRODUCT-AAA'),
        createConnectAppController('PRODUCT-zzz')
      ];
      const action = new ConnectAppControllerLoaded(connectAppControllers);
      const result: ConnectAppControllerState = connectAppControllerReducer(
        initialState,
        action
      );
      const selId: string = getConnectAppControllerId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = connectAppControllerReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

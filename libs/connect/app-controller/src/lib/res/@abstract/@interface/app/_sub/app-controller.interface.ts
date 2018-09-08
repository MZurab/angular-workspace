import { AppsIdEnum } from '../../../@enums/app/apps-id.enum';

export interface AppControllerInterface {
  stack: {
    id: AppsIdEnum;
    payload: any;
  };
  stackSize: number;
  currentAppIndex: number;
}

import { AppsIdEnum } from '../../../@enums/app/apps-id.enum';

export interface AppBaseInterface {
  name: string;
  header?: any;
  footer?: any;
  body?: any;

  _actions_?: any;
  id: AppsIdEnum;
}

export interface ConnectAppsListInterface {
  id: AppsIdEnum;
  weight: number;
}

export interface ConnectAppsStorageInterface {
  [AppsIdEnum.edocument]: AppBaseInterface;
  [AppsIdEnum.onepay]: AppBaseInterface;
  [AppsIdEnum.market]: AppBaseInterface;
  [AppsIdEnum.sharepay]: AppBaseInterface;
  [AppsIdEnum.chat]: AppBaseInterface;
}

export interface ConnectAppsInterface {
  storage: ConnectAppsStorageInterface;
  list: ConnectAppsListInterface[];
  currentId: AppsIdEnum;
}

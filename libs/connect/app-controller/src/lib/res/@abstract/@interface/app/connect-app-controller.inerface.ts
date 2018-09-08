import { AngularAppIdEnum } from '../../@enums/app/angular-app-id.enum';
import { ConnectAppsInterface } from './_sub/app-base.interface';
import { AppControllerInterface } from './_sub/app-controller.interface';
import { SyncInterface } from './_sub/sync.interface';

export interface ConnectAppControllerInerface {
  //@<apps
  apps: ConnectAppsInterface;
  //@>apps

  //@<balance -
  balance?: {
    main: {};
    // all
    other: [
      {
        type: number;
        uid: string;
        amount: number;
        currency: string;
        name: string;
        id: string;
      }
    ];
    currentId: string;
  };
  //@>balance

  //@<base - id
  angularAppId: AngularAppIdEnum;
  //@>base - id

  //@navigationController app
  navigationController: AppControllerInterface[];

  // syns - (cross domain) [user]
  sync?: SyncInterface;
}

/*
* app.changed
* app.opened
* user.changed
*
*
*
* */

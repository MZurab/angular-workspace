import { UserStateEnum } from '../../../@enums/user/user-state.enum';

export interface ConnectUser {
  token: string;
  uid: string;
  login: string;

  //@user info
  info: {
    lastname: string;
    firstname: string;
    middlename: string;
    icon: string;
  };
  //@user statuses - ..some statuses of verifed
  status: {
    verifed: boolean;
    // ...
  };
  //@user states
  state: UserStateEnum;

  pseudousers?: ConnectPseudoUser[];
}

export interface ConnectPseudoUser {
  // service user id
  sid: string;

  uid: string;
  login: string;
  info: {
    lastname: string;
    firstname: string;
    middlename: string;
    icon: string;
  };
}

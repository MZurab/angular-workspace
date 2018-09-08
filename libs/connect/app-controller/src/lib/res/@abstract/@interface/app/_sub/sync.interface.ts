import { ConnectUser } from './user.interface';

export interface SyncInterface {
  users: ConnectUser[];
  currenUserId: string;
}

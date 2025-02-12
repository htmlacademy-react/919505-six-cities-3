import {TToken} from './server-entities';

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email?: string;
  token?: TToken;
};

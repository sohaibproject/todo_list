import { UserModel } from './models';

export interface AuthInitialState {
  loading: boolean;
  is_auth: boolean | null;
  user: UserModel | null;
}

export interface UserCredential {
  email: string;
  password: string;
}

import { UserModel } from './models';

export interface AuthInitialState {
  loading: boolean;
  isAuth: boolean | null;
  user: UserModel | null;
}

export interface UserCredential {
  email: string;
  password: string;
}

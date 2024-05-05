import { decryptMessage } from '../../../@core/utils/crypto/cryoto';
import { AuthInitialState } from './types';

export const loadInitialState = (): AuthInitialState => {
  const token = localStorage.getItem('token');
  const userString = localStorage.getItem('user');
  if (token && userString) {
    const user = JSON.parse(decryptMessage(userString, false));
    return {
      isAuth: true,
      loading: false,
      user: user,
    };
  }
  return {
    isAuth: false,
    loading: false,
    user: null,
  };
};

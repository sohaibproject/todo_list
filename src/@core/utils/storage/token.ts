import { decryptMessage, encryptMessage } from '../crypto/cryoto';

export const getToken = (): string => {
  const token = localStorage.getItem('token');
  if (!token) return '';

  return decryptMessage(token, false);
};

export const setToken = (token: object) => localStorage.setItem('token', encryptMessage(token));

export const clearToken = () => localStorage.removeItem('token');

import { errorAlert } from '../../../utils/alerts/sweetalert/sweetalert';
import { statusTexts, statusTitles } from './data';

//#region functions

export const getStatusTitle = (status: number) => statusTitles.get(status) || 'Error';
export const getStatusText = (status: number) => statusTexts.get(status) || 'Error';

export const checkConnection = () => {
  return navigator.onLine;
};

export const checkIsConnected = async () => {
  if (!checkConnection()) {
    await errorAlert({ errors: `you don't have connection` });
    throw new Error('you dont have connection');
  }
};

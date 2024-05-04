import { isAxiosError } from 'axios';
import { AxiosError } from 'axios';
import formatAxiosError from './helpers/format-axios-error';
import { ErrorType } from './typing';
import handelBackendErrors from './helpers/server-error-formatter';
import { defaultReturn } from './helpers/data';
import { errorAlert } from '../../utils/alerts/sweetalert/sweetalert';

export interface ServerErrorModel {
  message: string;
}
const formatErrorMessage = (error: unknown): ErrorType => {
  if (!isAxiosError(error)) return defaultReturn;

  const formatError = formatAxiosError(error);
  if (formatError.title && formatError.errors) return formatError;

  const axiosError = error as AxiosError;

  if (!axiosError.response) return defaultReturn;

  const data = axiosError.response.data;
  const status = axiosError.response.status;

  //backend error
  return handelBackendErrors(data, status);
};

export default formatErrorMessage;

export const handelCatch = async (error: unknown, showError?: boolean) => {
  const { callback, errors, title, textStart } = formatErrorMessage(error);

  if (showError) {
    await errorAlert({
      errors,
      title,
      textStart,
      backdrop: typeof callback !== 'function',
      showCloseButton: typeof callback !== 'function',
      confirmButtonText: typeof callback === 'function' ? 'logout' : undefined,
    });

    typeof callback === 'function' && callback(); //call the callback
  }
};

import { ErrorType } from './typing';
import handelBackendErrors from './helpers/server-error-formatter';
import { FetchException } from '../exception/FetchException';
import { defaultReturn } from './helpers/data';
import { errorAlert } from '../../utils/alerts/sweetalert/sweetalert';

const formatErrorMessage = (error: unknown): ErrorType => {
  if (!(error instanceof FetchException)) return defaultReturn;

  //backend error type FetchException
  return handelBackendErrors(error.message, error.status);
};

export const handelCatch = async (error: unknown, showError?: boolean) => {
  const { callback, errors, title, textStart } = formatErrorMessage(error);

  if (showError)
    await errorAlert({
      errors,
      title,
      textStart,
      backdrop: typeof callback !== 'function',
      showCloseButton: typeof callback !== 'function',
      confirmButtonText: typeof callback === 'function' ? 'logout' : undefined,
    });

  typeof callback === 'function' && callback(); //call the callback
};

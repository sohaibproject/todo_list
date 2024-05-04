import { ErrorType } from '../typing';
import { getStatusTitle } from './helper';

import { defaultReturn } from './data';

/**
 * Handles errors coming from the backend API response and formats them for display.
 *
 * @param {unknown} data - The response data from the backend.
 * @param {number} status - The HTTP status code of the response.
 * @returns {ErrorType} - An object containing formatted error information, including errors, title, and optional callback.
 */

const handelBackendErrors = (data: any, status: number): ErrorType => {
  if (!(status && data)) return defaultReturn;

  if ([404, 400, 401, 403, 406].includes(status)) {
    return {
      errors: data.message ?? 'server error',
      title: getStatusTitle(status),
    };
  }

  if (status === 500) {
    return { errors: data.message, title: 'server error' };
  } //end status = 400

  return defaultReturn;
};

export default handelBackendErrors;

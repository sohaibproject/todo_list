import { AxiosError } from 'axios';
import { ErrorType } from '../typing';

/**
 * Handles Axios errors and returns error information.
 *
 * @param {any} error - The error object to be handled.
 * @returns {{ ErrorType }} - An object containing error information.
 *
 * Supported Error Codes:
 * - ERR_NETWORK: Network Error
 * - ECONNABORTED: Request Timeout
 * - ENOTFOUND: Server Not Found
 * - ETIMEDOUT: Request Timeout
 * - ERR_INVALID_URL: Invalid URL
 * - ERR_CANCELED: Request Canceled
 * - ERR_NOT_SUPPORT: Unsupported Feature
 * - ERR_BAD_OPTION_VALUE: Invalid Option Value
 * - ERR_BAD_OPTION: Invalid Option
 * - ERR_DEPRECATED: Deprecated Feature
 * - ERR_BAD_RESPONSE: Bad Response
 * - ERR_FR_TOO_MANY_REDIRECTS: Too Many Redirects
 * - ERR_BAD_REQUEST: Bad Request
 *
 * Note: default return is {errors :'' ,title:''} empty string
 */

const formatAxiosError = (error: any): ErrorType => {
  let errors: string = '';
  let title: string = '';
  let textStart = undefined;
  if (error as AxiosError) return { errors, title, textStart };

  switch (error.code) {
    case 'ERR_NETWORK':
      errors = 'Network Error';
      title = ' Request Timeout';
      textStart = true;
      break;

    case 'ECONNABORTED':
      /*errors = 'The request was aborted due to a timeout.';
            title = 'Request Timeout';*/

      errors = ' Request Timeout';
      title = ' Request Timeout';

      break;
    case 'ENOTFOUND':
      /* errors = 'The requested server address was not found.';
            title = 'Server Not Found';*/

      errors = 'Server Not Found';
      title = 'Server Not Found';

      break;
    case 'ETIMEDOUT':
      /*errors = 'The request timed out. Please try again later.';
            title = 'Request Timeout';*/

      errors = 'Request Timeout';
      title = 'Request Timeout';

      break;
    case 'ERR_INVALID_URL':
      /* errors = 'The provided URL is invalid.';
            title = 'Invalid URL';*/

      errors = 'Invalid URL';
      title = 'Invalid URL';

      break;
    case 'ERR_CANCELED':
      /*errors = 'The request was canceled.';
            title = 'Request Canceled';*/

      errors = 'Request Canceled';
      title = 'Request Canceled';

      break;
    case 'ERR_NOT_SUPPORT':
      /*errors = 'This feature is not supported.';
            title = 'Unsupported Feature';*/

      errors = 'Unsupported Feature';
      title = 'Unsupported Feature';

      break;
    case 'ERR_BAD_OPTION_VALUE':
      /*errors = 'An invalid value was provided for a specific option in the request configuration.';
            title = 'Invalid Option Value';*/

      errors = 'Invalid Option Value';
      title = 'Invalid Option Value';

      break;

    case 'ERR_BAD_OPTION':
      /*errors = 'An invalid option was provided in the request configuration.';
            title = 'Invalid Option';*/

      errors = 'Invalid Option';
      title = 'Invalid Option';

      break;

    case 'ERR_DEPRECATED':
      /*errors = 'This feature is deprecated and no longer recommended for use.';
            title = 'Deprecated Feature';*/
      errors = 'Deprecated Feature';
      title = 'Deprecated Feature';

      break;
    case 'ERR_BAD_RESPONSE':
      /*errors = 'The server sent a malformed or unexpected response.';
            title = 'Bad Response';*/

      errors = 'Bad Response';
      title = 'Bad Response';

      break;

    case 'ERR_FR_TOO_MANY_REDIRECTS':
      /*errors = 'The server is redirecting the request in a loop.';
            title = 'Too Many Redirects';*/

      errors = 'Too Many Redirects';
      title = 'Too Many Redirects';
      break;
  }

  return { errors, title, textStart };
};
export default formatAxiosError;

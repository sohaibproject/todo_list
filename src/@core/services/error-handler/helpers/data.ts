import { ErrorType } from '../typing';

export const statusTitles: Map<number, string> = new Map([
  [500, 'server error'],
  [401, 'unauthorized'],
  [403, 'forbidden'],
  [406, 'not acceptable'],
  [404, 'not Found'],
  [400, 'Bad Request'],
]);

export const statusTexts: Map<number, string> = new Map([
  [500, 'the server encountered an error and could not complete your request'],
  [401, 'access is denied due to invalid credentials'],
  [403, `you don't have permission to access this resource`],
  [406, 'the server cannot produce a response matching the list of acceptable values.'],
]);
/**The message that appears to the user if it is not possible to accurately determine the type of error*/
export const defaultReturn: ErrorType = {
  errors: 'an unexpected error occurred in our servers. Please try again later or contact the support center',
  title: 'server error',
};

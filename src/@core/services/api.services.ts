import axios from 'axios';
import { baseURL } from '../config/api.config';
import { ApiConfig, ApiData } from './typing/types';
import { prepareRequest, request } from './helper/helper';
import { getToken } from '../utils/storage/token';

const instanceOptions = (token: string | boolean | null) => ({
  baseURL: baseURL,
  //baseURL: 'http://localhost:8087/api/v1' ,
  silent: true,
  headers: {
    'x-auth-token': token,
  },
  /*timeout: 200*/
});

export let instance = axios.create(instanceOptions(getToken()));

export const refreshToken = (newToken: string) => (instance = axios.create(instanceOptions(newToken)));

export const $axios = {
  get: async (url: string, config?: ApiConfig) => {
    const _showError = config?.apiOptions?.showError;
    const _config = {
      ...config,
      apiOptions: {
        showError: _showError ?? true,
        ...config?.apiOptions,
        showSuccess: false,
      },
    };
    return await request(url, undefined, _config);
  },

  put: async (url: string, data: ApiData, config?: ApiConfig) => await prepareRequest(url, data, 'PUT', config),

  post: async (url: string, data: ApiData, config?: ApiConfig) => await prepareRequest(url, data, 'POST', config),

  delete: async (url: string, config?: ApiConfig) => await prepareRequest(url, undefined, 'DELETE', config),
};

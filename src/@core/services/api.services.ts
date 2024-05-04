import axios from 'axios';
import { baseURL } from '../config/api.config';
import { ApiConfig, ApiData } from './typing/types';
import { prepareRequest, request } from './helper/helper';

const instanceOptions = () => ({
  baseURL: baseURL,
});

export let instance = axios.create(instanceOptions());

// export const refreshToken = (newToken: string) => (instance = axios.create(instanceOptions()));

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

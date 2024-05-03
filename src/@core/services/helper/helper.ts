import { ApiConfig, ApiData, ApiMethods, ApiOptions } from '../typing/types';
import { handelCatch } from '../error-handler/error-handler';
import { instance } from '../api.services';
import { successToast } from '../../utils/alerts/taost/Toast';
import { errorAlert } from '../../utils/alerts/sweetalert/sweetalert';

export const getOptions = (config: ApiConfig): ApiOptions => {
  const newOptions = config?.['apiOptions'] ?? {};
  const defaultApiOptions = {
    showSuccess: true,
    showError: true /*successMsg: ''*/,
  };

  return { ...defaultApiOptions, ...newOptions };
};
// esm_get-safe-id_get-safe-id_js-node_modules_photoswipe_dis-5cc695.chunk.js net::ERR_INTERNET_DISCONNECTED

export const generateDefaultMessage = (method: ApiMethods) => {
  if (method === 'POST') return 'success Add';
  if (method === 'PUT') return 'success Edit';
  if (method === 'DELETE') return 'success Delete';
};

export const request = async (url: string, data: ApiData, config: ApiConfig) => {
  const { showError, showSuccess, successMsg } = getOptions(config);

  try {
    const response = await instance.request({
      url,
      responseType: config.responseType ?? 'json',
      method: config.apiOptions?.method ?? 'GET',
      data,
      params: config.params,
      headers: config.headers,
    });

    const { status, data: responseData } = response;

    if ([200, 201].includes(status)) {
      if (showSuccess) successToast(successMsg);
      return config.apiOptions?.returnResponse ? response : responseData;
    }

    if (showError) await errorAlert();
  } catch (error) {
    await handelCatch(error, showError);
    throw error;
  } finally {
    if (process.env.NODE_ENV === 'production') console.clear();
  }
};

export const prepareRequest = async (url: string, data: ApiData, method: ApiMethods, config?: ApiConfig) => {
  const _config = {
    ...config, //params & headers
    apiOptions: {
      ...config?.apiOptions,
      showSuccess: config?.apiOptions?.showSuccess ?? true,
      successMsg: config?.apiOptions?.successMsg ?? generateDefaultMessage(method),
      method,
    },
  };

  return await request(url, data, _config);
};

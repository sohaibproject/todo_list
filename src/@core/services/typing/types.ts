import React from 'react';
import { AxiosRequestConfig } from 'axios';

export type ApiMethods = 'POST' | 'GET' | 'PUT' | 'DELETE';
export type ApiData = object | undefined | string;

export interface ApiOptions {
  showSuccess?: boolean;
  successMsg?: string;
  showError?: boolean;
  method?: ApiMethods;
  returnResponse?: boolean;
}

export interface ApiConfig extends AxiosRequestConfig {
  apiOptions?: ApiOptions;
}

export interface DownloadFileOptions {
  url: string;
  fileName?: string;
  /** Disable button when downloading file*/
  setDownloadLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PreviewFileOptions extends Omit<DownloadFileOptions, 'fileName'> {}

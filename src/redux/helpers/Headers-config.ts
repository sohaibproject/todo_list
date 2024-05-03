import { ApiConfig } from '../../@core/services/typing/types';

let config: ApiConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
  apiOptions: {
    showSuccess: false,
  },
};

export default config;

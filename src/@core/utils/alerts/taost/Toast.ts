import toast, { ToastOptions } from 'react-hot-toast';

const defaultOptions = (options?: ToastOptions) => ({
  duration: options?.duration ?? 4000,
  position: options?.position ?? 'bottom-right',
  style: {
    padding: 15,
  },
});

export const loadingToast = (mes?: string, options?: ToastOptions) => toast.loading(`loading ...` ?? mes, defaultOptions(options));

export const errorToast = (mes?: string, options?: ToastOptions) => toast.error(`error` ?? mes, defaultOptions(options));

export const successToast = (mes?: string, options?: ToastOptions) => toast.success(mes || 'alert.successfulOperation', defaultOptions(options));

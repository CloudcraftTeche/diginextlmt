import { toast, type ToastContent, type ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export const showToast = (
  message: ToastContent, 
  type: ToastType = 'success',
  options?: ToastOptions
): void => {
  const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...options,
  };

  toast[type](message, defaultOptions);
};

export { toast };
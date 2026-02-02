import { toast, type ToastContent, type ToastOptions } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";

export const showToast = (
  message: ToastContent,
  type: ToastType = "success",
  options?: ToastOptions,
): void => {
  // Prevent execution on server-side
  if (typeof window === "undefined") {
    return;
  }

  const defaultOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...options,
  };

  if (typeof toast[type] === "function") {
    toast[type](message, defaultOptions);
  } else {
    // Fallback if type is invalid for some reason
    toast(message, defaultOptions);
  }
};

export { toast };

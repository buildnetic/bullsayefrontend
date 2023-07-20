import { toast } from "react-toastify";

const ToastStyle = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const ToastSuccess = (msg) => {
  return toast.success(msg, ToastStyle);
};

export const ToastError = (msg) => {
  return toast.error(msg, ToastStyle);
};

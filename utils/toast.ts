import {
  toast,
  ToastOptions as ToastOptions_TP,
  ToastPosition,
} from "react-toastify"

const toastOptions: ToastOptions_TP = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "light",
}

const STYLES = {
  success: "bg-mainGreen text-white ",
  error: "bg-mainRed text-white ",
  info: "bg-blue-300 text-white ",
}

type ToastType = keyof typeof STYLES 

export const notify = (
  type: ToastType = "success",
  msg?: string,
  position: ToastPosition = "top-right"
) => {
  let message = msg || "the proccess is done successfully"

  if (type === "error" && !!!msg) {
    message = "There is something wronge try again"
  }
  const className = STYLES[type]

  toast[type](message, {
    ...toastOptions,
    className,
    position,
  })
}

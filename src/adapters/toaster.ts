import { toast, type ToastContentProps } from "react-toastify";
import Dialog from "../components/dialog";

export const toaster = {
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    warning: (message: string) => toast.warning(message),
    info: (message: string) => toast.info(message),
    dismiss: () => toast.dismiss(),
    confirm: (data: string, onClosing: (confirmation: boolean) => void ) => {
        toast(Dialog, {
            data,
            onClose: confirmation => {
                if (confirmation) return onClosing(true);
                return onClosing(false);
            },
            closeOnClick: false,
            closeButton: false,
            autoClose: false,
            position: "top-center",
        })
    }
};
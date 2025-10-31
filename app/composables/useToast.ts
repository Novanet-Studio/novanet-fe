import { useState } from "#app";

interface ToastState {
  message: string;
  type: "success" | "error";
  show: boolean;
}

let timeoutId: NodeJS.Timeout | null = null;

export const useToast = () => {
  const toastState = useState<ToastState | null>("toast", () => null);

  const showToast = (
    message: string,
    type: "success" | "error" = "success",
    duration = 4000
  ) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    toastState.value = { message, type, show: true };

    timeoutId = setTimeout(() => {
      if (toastState.value) {
        toastState.value.show = false;
      }
      setTimeout(() => {
        toastState.value = null;
      }, 300);
    }, duration);
  };

  return {
    toastState,
    showToast,
  };
};

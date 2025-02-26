import { toast } from "react-toastify";

export const checkDoublons = (array, newValue) => {
  if (array.length === 0) return false;
  if (array.some((item) => item.name === newValue)) {
    toast.error("Cette élement existe déjà");
    throw new Error("Cette élement existe déjà");
  }
};

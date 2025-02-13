import {toast} from 'react-toastify';

export function makeFirstLetterToUpperCase (string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function showToast(message: string) {
  toast.warn(message, {position: 'bottom-right'});
}

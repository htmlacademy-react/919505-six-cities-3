import {useEffect} from 'react';
import {RequestStatus} from '../../const';
import {showToast} from '../../utils';

export default function useToast(status: RequestStatus, message: string) {
  useEffect(() => {
    if (status === RequestStatus.Failed) {
      showToast(message);
    }
  }, [status, message]);
}

import {useAppSelector} from './store';
import {userSliceSelectors} from '../store/slices/user';
import {AuthorizationStatus} from '../const';

export function useAuth() {
  const authStatus = useAppSelector(userSliceSelectors.authorizationStatus);
  return authStatus === AuthorizationStatus.Auth;
}

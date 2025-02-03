import {useAppSelector} from './store';
import {userProcessSelectors} from '../store/slice/user-process';
import {AuthorizationStatus} from '../common/const';

export function useAuth() {
  const authStatus = useAppSelector(userProcessSelectors.authorizationStatus);
  return authStatus === AuthorizationStatus.Auth;
}

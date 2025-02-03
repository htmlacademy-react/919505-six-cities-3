import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {useAppSelector} from '../../hooks/store';
import {userProcessSelectors} from '../../store/slice/user-process';

type TPrivateRouteProps = {
  isReverse?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({isReverse, children}: TPrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(userProcessSelectors.authorizationStatus);

  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login}/>
  );
}

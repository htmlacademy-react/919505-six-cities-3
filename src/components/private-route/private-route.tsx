import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/store';
import {userSliceSelectors} from '../../store/slices/user';

type TPrivateRouteProps = {
  isReverse?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({isReverse, children}: TPrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(userSliceSelectors.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return children;
  }

  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login}/>
  );
}

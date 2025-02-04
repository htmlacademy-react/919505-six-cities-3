import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {useAppSelector} from '../../hooks/store';
import {userSliceSelectors} from '../../store/slices/user';

type TPrivateRouteProps = {
  isReverse?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({isReverse, children}: TPrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(userSliceSelectors.authorizationStatus);

  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login}/>
  );
}

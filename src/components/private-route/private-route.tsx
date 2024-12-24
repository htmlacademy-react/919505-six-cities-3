import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../utils/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  rerouteDestination: string;
  children: JSX.Element;
}

export default function PrivateRoute({authorizationStatus, rerouteDestination, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={rerouteDestination} />
  );
}

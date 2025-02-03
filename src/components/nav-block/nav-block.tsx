import {Link} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import {useAuth} from '../../hooks/user-authorisation';
import {useActionCreators, useAppSelector} from '../../hooks/store';
import {userProcessActions, userProcessSelectors} from '../../store/slice/user-process';

type TNavBlockProps = {
  favoritesQuantity: number;
}

export default function NavBlock({favoritesQuantity}: TNavBlockProps): JSX.Element {
  const isAuthorized = useAuth();
  const user = useAppSelector(userProcessSelectors.info);
  const {logout} = useActionCreators(userProcessActions);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={isAuthorized ? AppRoute.Favorites : AppRoute.Login} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isAuthorized
              ? (
                <>
                  <span className="header__user-name user__name">{user?.email}</span>
                  <span className="header__favorite-count">{favoritesQuantity}</span>
                </>)
              : <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {isAuthorized && (
          <li className="header__nav-item">
            <Link to={'#'} className="header__nav-link" onClick={() => logout()}> <span className="header__signout">Sign out</span> </Link>
          </li>)}
      </ul>
    </nav>
  );
}

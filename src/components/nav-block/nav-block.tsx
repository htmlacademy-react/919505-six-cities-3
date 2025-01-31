import {Link} from 'react-router-dom';
import {getAuthorizationStatus} from '../../common/utils';
import {AppRoute, AuthorizationStatus} from '../../common/const';

type TNavBlockProps = {
  favoritesQuantity: number;
}

export default function NavBlock({favoritesQuantity}: TNavBlockProps): JSX.Element {
  const isAuthorized = getAuthorizationStatus() === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={isAuthorized ? AppRoute.Favorites : AppRoute.Login} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isAuthorized
              ? (
                <>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">{favoritesQuantity}</span>
                </>)
              : <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {isAuthorized ? (
          <li className="header__nav-item">
            <a className="header__nav-link" href="#"> <span className="header__signout">Sign out</span> </a>
          </li>)
          : ''}
      </ul>
    </nav>
  );
}

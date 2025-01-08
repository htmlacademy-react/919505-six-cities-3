import {getAuthorizationStatus} from '../../utils/common';
import {AuthorizationStatus} from '../../utils/const';

type NavBlockProps = {
  favoritesQuantity: number;
}

export default function NavBlock({favoritesQuantity}: NavBlockProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {authorizationStatus === AuthorizationStatus.Auth
              ? (
                <>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">{favoritesQuantity}</span>
                </>)
              : <span className="header__login">Sign in</span>}
          </a>
        </li>
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <li className="header__nav-item">
            <a className="header__nav-link" href="#"> <span className="header__signout">Sign out</span> </a>
          </li>)
          : ''}
      </ul>
    </nav>
  );
}

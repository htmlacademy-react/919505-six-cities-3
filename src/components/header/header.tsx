import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const.ts';
import NavBlock from '../nav-block';

type HeaderProps = {
  linkClassName: string;
  shouldRenderUser: boolean;
  favoritesQuantity: number;
};

export default function Header({linkClassName, shouldRenderUser, favoritesQuantity}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`header__logo-link ${linkClassName}`} to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {shouldRenderUser
            ? <NavBlock favoritesQuantity={favoritesQuantity}/>
            : ''}
        </div>
      </div>
    </header>
  );
}


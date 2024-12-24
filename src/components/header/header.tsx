import {Link} from 'react-router-dom';
import {AppRoute, Page} from '../../utils/const.ts';
import NavBlock from '../nav-block/nav-block.tsx';

type HeaderProps = {
  currentPage: Page;
  favoritesQuantity: number;
};

export default function Header({currentPage, favoritesQuantity}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`header__logo-link ${currentPage === Page.Main ? 'header__logo-link--active' : ''}`} to={AppRoute[Page.Main]}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {currentPage === Page.Login
            ? ''
            : <NavBlock favoritesQuantity={favoritesQuantity}/>}
        </div>
      </div>
    </header>
  );
}


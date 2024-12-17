import {Page} from '../../common/const.ts';
import NavBlock from '../nav-block/nav-block.tsx';

type HeaderProps = {
  currentPage: string;
  favoritesQuantity: number;
};

export default function Header({currentPage, favoritesQuantity}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          {currentPage === Page.LOGIN
            ? ''
            : <NavBlock favoritesQuantity={favoritesQuantity}/>}
        </div>
      </div>
    </header>
  );
}


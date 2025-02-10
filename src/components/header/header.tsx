import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import NavBlock from '../nav-block';

type THeaderProps = {
  linkClassName: string;
  shouldRenderUser: boolean;
};

function Header({linkClassName, shouldRenderUser}: THeaderProps): JSX.Element {
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
            ? <NavBlock/>
            : ''}
        </div>
      </div>
    </header>
  );
}

const MemorizedHeader = memo(Header);
export default MemorizedHeader;

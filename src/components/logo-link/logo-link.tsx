import {memo} from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type TLogoLinkProps = {
  logoClassName: string;
};

function LogoLink({logoClassName}: TLogoLinkProps): JSX.Element {
  return (
    <Link className={`header__logo-link ${logoClassName}`} to={AppRoute.Root}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}

const MemorizedLogoLink = memo(LogoLink);
export default MemorizedLogoLink;

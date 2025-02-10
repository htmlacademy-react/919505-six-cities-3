import {memo} from 'react';
import NavBlock from '../nav-block';
import LogoLink from '../logo-link';

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
            <LogoLink linkClassName={linkClassName}/>
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

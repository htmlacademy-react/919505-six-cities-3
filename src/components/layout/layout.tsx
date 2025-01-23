import {PropsWithChildren} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import {getLayoutState} from './utils';
import Footer from '../footer';
import Header from '../header';

type TLayoutProps = {
  favoritesQuantity: number;
};

export default function Layout({favoritesQuantity}: PropsWithChildren<TLayoutProps>): JSX.Element {
  const currentPage = useLocation().pathname;

  const {rootClassName,
    linkClassName,
    shouldRenderUser,
    shouldRenderHeader,
    shouldRenderFooter
  } = getLayoutState(currentPage as AppRoute, favoritesQuantity);

  return (
    <div className={`page ${rootClassName}`}>
      {shouldRenderHeader && <Header linkClassName={linkClassName} shouldRenderUser={shouldRenderUser} favoritesQuantity={favoritesQuantity}/>}
      <Outlet/>
      {shouldRenderFooter && <Footer/>}
    </div>
  );
}

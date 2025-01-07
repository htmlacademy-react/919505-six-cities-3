import {PropsWithChildren} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute} from '../../utils/const.ts';
import Footer from '../footer/footer.tsx';
import Header from '../header/header.tsx';

type LayoutProps = {
  favoritesQuantity: number;
};

const getLayoutState = (pathName: AppRoute, favoritesQuantity: number) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;
  let shouldRenderHeader = true;
  let shouldRenderFooter = false;

  switch (pathName) {
    case AppRoute.Root:
      rootClassName = 'page--gray page--main';
      linkClassName = 'header__logo-link--active';
      break;
    case AppRoute.Login:
      rootClassName = 'page--gray page--login';
      shouldRenderUser = false;
      break;
    case AppRoute.Favorites:
      rootClassName = favoritesQuantity === 0 ? 'page--favorites-empty' : '';
      shouldRenderFooter = true;
      break;
    case AppRoute.PageNotFound:
      rootClassName = 'page--gray page--main';
      shouldRenderHeader = false;
      break;
  }

  return {rootClassName, linkClassName, shouldRenderUser, shouldRenderHeader, shouldRenderFooter};
};

export default function Layout({favoritesQuantity}: PropsWithChildren<LayoutProps>): JSX.Element {
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

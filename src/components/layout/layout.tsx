import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import {getLayoutState} from './utils';
import Footer from '../footer';
import Header from '../header';
import {appDataSelectors} from '../../store/app-data';
import {useAppSelector} from '../../hooks/store';

export default function Layout(): JSX.Element {
  const favoritesQuantity = useAppSelector(appDataSelectors.offers).length;
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

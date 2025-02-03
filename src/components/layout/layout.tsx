import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import {getLayoutState} from './utils';
import Footer from '../footer';
import Header from '../header';
import {useAppSelector} from '../../hooks/store';
import {favoritesSliceSelectors} from '../../store/slice/favorites/favorites-slice';

export default function Layout(): JSX.Element {
  const favoritesQuantity = useAppSelector(favoritesSliceSelectors.offers).length;
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

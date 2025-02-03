import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute} from '../../common/const';
import {getLayoutState} from './utils';
import Footer from '../footer';
import Header from '../header';
import {appDataSelectors} from '../../store/slice/app-data';
import {useAppSelector} from '../../hooks/store';

export default function Layout(): JSX.Element {
  const offers = useAppSelector(appDataSelectors.offers);
  const currentPage = useLocation().pathname;

  const favoritesQuantity = offers.filter((offer) => offer.isFavorite).length;

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

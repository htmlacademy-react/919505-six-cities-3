import {AppRoute} from '../../const';
import {useLocation} from 'react-router-dom';
import {useAppSelector} from '../store';
import {offersSliceSelectors} from '../../store/slices/offers';

export default function useLayout() {
  const favorites = useAppSelector(offersSliceSelectors.favoriteOffers);
  const pathName = useLocation().pathname;

  const favoritesQuantity = favorites.length;

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
}

import {AppRoute} from '../../const';
import {useLocation} from 'react-router-dom';
import {useAppSelector} from '../store';
import {offersSliceSelectors} from '../../store/slices/offers';

enum RootClassName {
  Default = 'page--gray page--main',
  Login = 'page--gray page--login',
  FavoritesEmpty = 'page--favorites-empty',
}

enum LogoClassName {
  Root = 'header__logo-link--active'
}

export default function useLayout() {
  const favorites = useAppSelector(offersSliceSelectors.favoriteOffers);
  const pathName = useLocation().pathname;

  const favoritesQuantity = favorites.length;

  let rootClassName = '';
  let logoClassName = '';
  let shouldRenderUser = true;
  let shouldRenderHeader = true;
  let shouldRenderFooter = false;

  switch (pathName) {
    case AppRoute.Root:
      rootClassName = RootClassName.Default;
      logoClassName = LogoClassName.Root;
      break;
    case AppRoute.Login:
      rootClassName = RootClassName.Login;
      shouldRenderUser = false;
      break;
    case AppRoute.Favorites:
      rootClassName = favoritesQuantity === 0 ? RootClassName.FavoritesEmpty : '';
      shouldRenderFooter = true;
      break;
    case AppRoute.NotFound:
      rootClassName = RootClassName.Default;
      shouldRenderHeader = false;
      break;
    case AppRoute.NotExistingPage:
      rootClassName = RootClassName.Default;
      shouldRenderHeader = false;
      break;
  }

  return {rootClassName, logoClassName, shouldRenderUser, shouldRenderHeader, shouldRenderFooter};
}

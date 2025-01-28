import {AppRoute} from '../../common/const';

export function getLayoutState(pathName: AppRoute, favoritesQuantity: number) {
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

import {getButtonAttributes} from './utils';
import {AppRoute, AuthorizationStatus, BookmarkButton} from '../../common/const';
import {useActionCreators, useAppSelector} from '../../hooks/store';
import {favoritesSliceActions} from '../../store/slices/favorites';
import {userSliceSelectors} from '../../store/slices/user';
import {useNavigate} from 'react-router-dom';

type TButtonBookmarkProps = {
  offerId: string;
  isFavorite: boolean;
  type: BookmarkButton;
}

export default function ButtonBookmark({offerId, isFavorite, type}: TButtonBookmarkProps): JSX.Element {
  const AuthStatus = useAppSelector(userSliceSelectors.authorizationStatus);
  const {changeFavorite} = useActionCreators(favoritesSliceActions);
  const {classNamePrefix, width, height} = getButtonAttributes(type);

  const navigate = useNavigate();

  const clickHandler = () => {
    if (AuthStatus === AuthorizationStatus.Auth) {
      changeFavorite({offerId, status: Number(!isFavorite)});
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={`${classNamePrefix}__bookmark-button ${isFavorite ? `${classNamePrefix}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={clickHandler}
    >
      <svg className={`${classNamePrefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

import {getButtonAttributes} from './utils';
import {BookmarkButton} from '../../common/const';
import {useActionCreators} from '../../hooks/store';
import {favoritesSliceActions} from '../../store/slice/favorites/favorites-slice';

type TButtonBookmarkProps = {
  offerId: string;
  isFavorite: boolean;
  type: BookmarkButton;
}

export default function ButtonBookmark({offerId, isFavorite, type}: TButtonBookmarkProps): JSX.Element {
  const {classNamePrefix, width, height} = getButtonAttributes(type);
  const {changeFavorite} = useActionCreators(favoritesSliceActions);

  const clickHandler = () => {
    changeFavorite({offerId, status: Number(!isFavorite)});
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

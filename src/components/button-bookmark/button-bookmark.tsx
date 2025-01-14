import {BookmarkButtonParams} from '../../utils/const';

type TButtonBookmarkProps = {
  type: string;
  isActive: boolean;
}

export default function ButtonBookmark({type, isActive}: TButtonBookmarkProps): JSX.Element {
  const classNamePrefix = type === BookmarkButtonParams.type.card ? 'place-card' : 'offer';
  const width = type === BookmarkButtonParams.type.card ? BookmarkButtonParams.width.little : BookmarkButtonParams.width.big;
  const height = type === BookmarkButtonParams.type.card ? BookmarkButtonParams.height.little : BookmarkButtonParams.height.big;

  return (
    <button className={`${classNamePrefix}__bookmark-button ${isActive ? `${classNamePrefix}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${classNamePrefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

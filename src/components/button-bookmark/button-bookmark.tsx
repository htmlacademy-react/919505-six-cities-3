import {BookmarkButtonParams} from '../../common/const.ts';

type ButtonBookmarkProps = {
  type: string;
  isActive: boolean;
}

export default function ButtonBookmark({type, isActive}: ButtonBookmarkProps): JSX.Element {
  const classNamePrefix = type === BookmarkButtonParams.CARD ? 'place-card' : 'offer';
  const width = type === BookmarkButtonParams.CARD ? BookmarkButtonParams.width.little : BookmarkButtonParams.width.big;
  const height = type === BookmarkButtonParams.CARD ? BookmarkButtonParams.height.little : BookmarkButtonParams.height.big;

  return (
    <button className={`${classNamePrefix}__bookmark-button ${isActive ? `${classNamePrefix}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${classNamePrefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

import {BookmarkButton, BookmarkButtonParams} from '../../common/const';

export function getButtonAttributes(type: BookmarkButton) {
  const classNamePrefix = type === BookmarkButton.Card ? 'place-card' : 'offer';
  const width = type === BookmarkButton.Card ? BookmarkButtonParams.width.little : BookmarkButtonParams.width.big;
  const height = type === BookmarkButton.Card ? BookmarkButtonParams.height.little : BookmarkButtonParams.height.big;

  return {classNamePrefix, width, height};
}

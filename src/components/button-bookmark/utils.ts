import {BookmarkButton, BookmarkButtonParams} from '../../const';

const PLACE_CARD = 'place-card';
const OFFER = 'offer';

export function getButtonAttributes(type: BookmarkButton) {
  const classNamePrefix = type === BookmarkButton.Card ? PLACE_CARD : OFFER;
  const width = type === BookmarkButton.Card ? BookmarkButtonParams.width.little : BookmarkButtonParams.width.big;
  const height = type === BookmarkButton.Card ? BookmarkButtonParams.height.little : BookmarkButtonParams.height.big;

  return {classNamePrefix, width, height};
}

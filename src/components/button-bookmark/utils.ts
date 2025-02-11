import {BookmarkButton, BookmarkButtonParams} from '../../const';
import {TOfferPreview} from '../../types/offers';

export function getButtonAttributes(type: BookmarkButton) {
  const classNamePrefix = type === BookmarkButton.Card ? 'place-card' : 'offer';
  const width = type === BookmarkButton.Card ? BookmarkButtonParams.width.little : BookmarkButtonParams.width.big;
  const height = type === BookmarkButton.Card ? BookmarkButtonParams.height.little : BookmarkButtonParams.height.big;

  return {classNamePrefix, width, height};
}

export function checkFavorite(favoriteOffers: TOfferPreview[], offerId: string) {
  const currentOffer = favoriteOffers.find((offer) => offer.id === offerId);
  return !!currentOffer;
}

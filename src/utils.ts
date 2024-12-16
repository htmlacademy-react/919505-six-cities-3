import {OfferPreviewType} from './types.ts';

const RATING_COEFFICIENT = 20;

export function calculateRatingWidth(rating: number): number {
  return Math.round(rating) * RATING_COEFFICIENT;
}

export function getFavoriteOffersQuantity(offers: OfferPreviewType[]): number {
  let result = 0;

  offers.forEach((offer) => {
    if (offer.isFavorite) {
      result++;
    }
  });

  return result;
}

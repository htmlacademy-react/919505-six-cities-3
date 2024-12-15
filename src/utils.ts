import {OfferType} from './types.ts';

const RATING_COEFFICIENT = 20;

export function calculateRatingWidth(rating: number): number {
  return rating * RATING_COEFFICIENT;
}

export function getFavoriteOffersQuantity(offers: OfferType[]): number {
  let result = 0;

  offers.forEach((offer) => {
    if (offer.isFavorite) {
      result++;
    }
  });

  return result;
}

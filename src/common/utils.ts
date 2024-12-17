import {FavoritesObjectType, OfferPreviewType} from './types.ts';

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

export function generateFavoriteOffersObject(offers: OfferPreviewType[]): FavoritesObjectType {
  const result: FavoritesObjectType = {};

  offers.forEach((offer) => {
    if (result[offer.city.name]) {
      result[offer.city.name].push(offer);
    } else {
      result[offer.city.name] = [offer];
    }
  });

  return result;
}

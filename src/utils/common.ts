import {TFavoritesObject, TOfferPreview} from './types.ts';
import {AuthorizationStatus, RATING_COEFFICIENT} from './const.ts';

export function calculateRatingWidth(rating: number): number {
  return Math.round(rating) * RATING_COEFFICIENT;
}

export function generateFavoriteOffersObject(offers: TOfferPreview[]): TFavoritesObject {
  const result: TFavoritesObject = {};

  offers.forEach((offer) => {
    if (result[offer.city.name]) {
      result[offer.city.name].push(offer);
    } else {
      result[offer.city.name] = [offer];
    }
  });

  return result;
}

export function getAuthorizationStatus() {
  return AuthorizationStatus.Auth;
}

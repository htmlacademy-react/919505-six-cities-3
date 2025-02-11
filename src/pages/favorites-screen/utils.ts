import {TFavoritesObject, TOfferPreview} from '../../types/offers';

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

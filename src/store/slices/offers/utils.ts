import {TCityName, TFavoritesObject, TOfferPreview, TOfferSortType} from '../../../types/offers';
import {SortingType} from '../../../const';

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

export function getProcessedOffers(offers: TOfferPreview[], city: TCityName, sortType: TOfferSortType) {
  const currentCityOffers = offers
    .filter((offer) => offer.city.name === city);

  switch (sortType) {
    case SortingType.POPULAR:
      return currentCityOffers;
    case SortingType.HIGH_TO_LOW:
      return currentCityOffers.sort((a, b) => b.price - a.price);
    case SortingType.LOW_TO_HIGH:
      return currentCityOffers.sort((a, b) => a.price - b.price);
    case SortingType.TOP_RATED_FIRST:
      return currentCityOffers.sort((a, b) => b.rating - a.rating);
    default:
      return currentCityOffers;
  }
}

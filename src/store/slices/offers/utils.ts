import {TCityName, TOfferPreview, TOfferSortType} from '../../../types/offers';
import {SortingType} from '../../../const';

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

export function checkFavoriteStatus(favoriteOffers: TOfferPreview[], offerId: string) {
  const offer = favoriteOffers.find((item) => item.id === offerId);
  return !!offer;
}

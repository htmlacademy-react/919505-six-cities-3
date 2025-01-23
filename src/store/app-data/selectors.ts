import {NameSpace, SortingTypes} from '../../common/const';
import {State} from '../../types/state';
import {TOfferPreview} from '../../types/offers';

export const getCurrentCityOffers = (state: State): TOfferPreview[] => {
  const currentSortingType = state[NameSpace.App].currentOffersSortType;
  const currentCityOffers = state[NameSpace.Data].offers
    .filter((offer) => offer.city.name === state[NameSpace.App].currentCity);

  switch (currentSortingType) {
    case SortingTypes.POPULAR:
      return currentCityOffers;
    case SortingTypes.HIGH_TO_LOW:
      return currentCityOffers.sort((a, b) => b.price - a.price);
    case SortingTypes.LOW_TO_HIGH:
      return currentCityOffers.sort((a, b) => a.price - b.price);
    case SortingTypes.TOP_RATED_FIRST:
      return currentCityOffers.sort((a, b) => b.rating - a.rating);
    default:
      return currentCityOffers;
  }
};

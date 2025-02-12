import {OfferCardParams} from '../../const';

enum OfferCardContainer {
  Default = 'cities__places-list places__list tabs__content',
  Favorite = 'favorites__places',
  NearPlaces = 'near-places__list places__list'
}

export function getContainerClassName(cardType: string) {
  switch (cardType) {
    case OfferCardParams.type.default:
      return OfferCardContainer.Default;
    case OfferCardParams.type.favorite:
      return OfferCardContainer.Favorite;
    case OfferCardParams.type.near:
      return OfferCardContainer.NearPlaces;
  }
}

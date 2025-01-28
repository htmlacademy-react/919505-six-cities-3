import {OfferCardParams} from '../../common/const';

export function getContainerClassName(cardType: string) {
  switch (cardType) {
    case OfferCardParams.type.default:
      return 'cities__places-list places__list tabs__content';
    case OfferCardParams.type.favorite:
      return 'favorites__places';
    case OfferCardParams.type.near:
      return 'near-places__list places__list';
  }
}

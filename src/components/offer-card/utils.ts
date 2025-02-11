import {CardType, OfferCardParams} from '../../const';

export function getParentBlockName(cardType: string) {
  switch (cardType) {
    case OfferCardParams.type.default:
      return CardType.CITIES;

    case OfferCardParams.type.near:
      return CardType.NEAR_PLACES;

    case OfferCardParams.type.favorite:
      return CardType.FAVORITES;
  }
}

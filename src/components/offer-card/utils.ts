import {OfferCardParams} from '../../const';

enum CardType {
  Cities = 'Cities',
  NearPlaces = 'NearPlaces',
  Favorites = 'Favorites'
}

export function getParentBlockName(cardType: string) {
  switch (cardType) {
    case OfferCardParams.type.default:
      return CardType.Cities;
    case OfferCardParams.type.near:
      return CardType.NearPlaces;
    case OfferCardParams.type.favorite:
      return CardType.Favorites;
  }
}

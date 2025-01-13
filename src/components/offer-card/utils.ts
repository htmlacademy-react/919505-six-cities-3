import {OfferCardParams} from '../../utils/const';

export function getParentBlockName(cardType: string) {
  switch (cardType) {
    case OfferCardParams.type.default:
      return 'cities';

    case OfferCardParams.type.near:
      return 'near-places';

    case OfferCardParams.type.favorite:
      return 'favorites';
  }
}

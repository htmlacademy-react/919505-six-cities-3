import {RatingPanelType} from '../../const';

enum Prefix {
  Reviews = 'reviews',
  Offer = 'offer',
  PlaceCard = 'place-card'
}

export function getClassNamePrefix(type: string) {
  switch (type) {
    case RatingPanelType.Reviews:
      return Prefix.Reviews;
    case RatingPanelType.Offer:
      return Prefix.Offer;
    case RatingPanelType.Card:
      return Prefix.PlaceCard;
  }
}

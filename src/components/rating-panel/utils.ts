import {RatingPanelType} from '../../common/const';

export function getClassNamePrefix(type: string) {
  switch (type) {
    case RatingPanelType.Reviews:
      return 'reviews';
    case RatingPanelType.Offer:
      return 'offer';
    case RatingPanelType.Card:
      return 'place-card';
  }
}

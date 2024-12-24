import {calculateRatingWidth} from '../../utils/common.ts';
import {RatingPanelType} from '../../utils/const.ts';

type RatingPanelProps = {
  type: RatingPanelType;
  rating: number;
}

function getClassNamePrefix(type: string) {
  switch (type) {
    case RatingPanelType.Reviews:
      return 'reviews';
    case RatingPanelType.Offer:
      return 'offer';
    case RatingPanelType.Card:
      return 'place-card';
  }
}

export default function RatingPanel({type, rating}: RatingPanelProps): JSX.Element {
  const classNamePrefix = getClassNamePrefix(type);

  return (
    <div className={`${classNamePrefix}__rating rating`}>
      <div className={`${classNamePrefix}__stars rating__stars`}>
        <span style={{width: `${calculateRatingWidth(rating)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {type === RatingPanelType.Offer && <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

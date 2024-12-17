import {calculateRatingWidth} from '../../common/utils.ts';
import {RatingPanelType} from '../../common/const.ts';

type RatingPanelProps = {
  type: string;
  rating: number;
}

function getClassNamePrefix(type: string) {
  switch (type) {
    case RatingPanelType.REVIEWS:
      return 'reviews';
    case RatingPanelType.OFFER:
      return 'offer';
    case RatingPanelType.CARD:
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
      {type === RatingPanelType.OFFER && <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

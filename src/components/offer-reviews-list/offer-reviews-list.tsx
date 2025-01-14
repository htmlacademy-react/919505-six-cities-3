import {TReview} from '../../utils/types';
import OfferReviewsItem from '../offer-reviews-item';

type TOfferReviewsListProps = {
  reviews: TReview[];
}

export default function OfferReviewsList({reviews}: TOfferReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <OfferReviewsItem review={review} key={review.id}/>)}
    </ul>
  );
}

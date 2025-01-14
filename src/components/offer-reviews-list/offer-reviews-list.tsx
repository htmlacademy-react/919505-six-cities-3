import {TReview} from '../../utils/types';
import OfferReviewsItem from '../offer-reviews-item';

type OfferReviewsListProps = {
  reviews: TReview[];
}

export default function OfferReviewsList({reviews}: OfferReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <OfferReviewsItem review={review} key={review.id}/>)}
    </ul>
  );
}

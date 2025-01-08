import OfferReviewsItem from '../offer-reviews-item';
import {Review} from '../../utils/types.ts';

type OfferReviewsListProps = {
  reviews: Review[];
}

export default function OfferReviewsList({reviews}: OfferReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <OfferReviewsItem review={review} key={review.id}/>)}
    </ul>
  );
}

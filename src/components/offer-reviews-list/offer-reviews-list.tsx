import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';
import {ReviewType} from '../../types';

type OfferReviewsListProps = {
  reviews: ReviewType[];
}

export default function OfferReviewsList({reviews}: OfferReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <OfferReviewsItem review={review} key={review.id}/>)}
    </ul>
  );
}

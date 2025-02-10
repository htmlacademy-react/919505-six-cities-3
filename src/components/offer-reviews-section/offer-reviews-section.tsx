import OfferReviewsList from '../offer-reviews-list';
import OfferReviewForm from '../offer-review-form';
import {useAppSelector} from '../../hooks/store';
import useAuth from '../../hooks/use-auth';
import {reviewsSliceSelectors} from '../../store/slices/reviews';
import {MAX_REVIEWS} from '../../const';
import {TReview} from '../../types/reviews';

export default function OfferReviewsSection(): JSX.Element {
  const reviews = useAppSelector(reviewsSliceSelectors.reviews);
  const isAuthorized = useAuth();
  const copiedReviews = [...reviews];
  let reviewsToRender: TReview[] = [];

  if (copiedReviews.length > 0) {
    copiedReviews
      .sort((review1, review2) => +new Date(review2.date) - +new Date(review1.date));

    reviewsToRender = copiedReviews.length > MAX_REVIEWS ? copiedReviews.slice(0, MAX_REVIEWS) : copiedReviews;
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <OfferReviewsList reviews={reviewsToRender}/>
      {isAuthorized && <OfferReviewForm/>}
    </section>
  );
}

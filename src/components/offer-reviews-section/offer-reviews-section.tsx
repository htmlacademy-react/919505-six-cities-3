import OfferReviewsList from '../offer-reviews-list';
import {AuthorizationStatus} from '../../utils/const';
import OfferReviewForm from '../offer-review-form';
import {getAuthorizationStatus} from '../../utils/common';
import {reviews} from '../../mocks/reviews';

export default function OfferReviewsSection(): JSX.Element {
  const isAuthorized = getAuthorizationStatus() === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <OfferReviewsList reviews={reviews}/>
      {isAuthorized && <OfferReviewForm/>}
    </section>
  );
}

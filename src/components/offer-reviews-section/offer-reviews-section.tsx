import OfferReviewsList from '../offer-reviews-list';
import OfferReviewForm from '../offer-review-form';
import {useAppSelector} from '../../hooks/store';
import {offersSliceSelectors} from '../../store/slices/offers';
import {useAuth} from '../../hooks/user-authorisation';

export default function OfferReviewsSection(): JSX.Element {
  const reviews = useAppSelector(offersSliceSelectors.reviews);
  const isAuthorized = useAuth();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <OfferReviewsList reviews={reviews}/>
      {isAuthorized && <OfferReviewForm/>}
    </section>
  );
}

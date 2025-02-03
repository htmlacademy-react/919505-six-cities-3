import OfferReviewsList from '../offer-reviews-list';
import {AuthorizationStatus} from '../../common/const';
import OfferReviewForm from '../offer-review-form';
import {getAuthorizationStatus} from '../../common/utils';
import {useAppSelector} from '../../hooks/store';
import {appDataSelectors} from '../../store/slice/app-data';

export default function OfferReviewsSection(): JSX.Element {
  const reviews = useAppSelector(appDataSelectors.reviews);
  const isAuthorized = getAuthorizationStatus() === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <OfferReviewsList reviews={reviews}/>
      {isAuthorized && <OfferReviewForm/>}
    </section>
  );
}

import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';

export default function OfferReviewsList(): JSX.Element {
  return (
    <ul className="reviews__list">
      <OfferReviewsItem/>
    </ul>
  );
}

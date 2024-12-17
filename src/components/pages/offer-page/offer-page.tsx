import OfferImage from '../../offer-image/offer-image';
import OfferFeaturesList from '../../offer-features-list/offer-features-list';
import OfferInsideList from '../../offer-inside-list/offer-inside-list';
import OfferHost from '../../offer-host/offer-host';
import OfferReviewsList from '../../offer-reviews-list/offer-reviews-list';
import OfferReviewForm from '../../offer-review-form/offer-review-form';
import OfferNearPlaces from '../../offer-near-places/offer-near-places';
import {OfferType, OfferPreviewType, ReviewType} from '../../../common/types.ts';
import {calculateRatingWidth} from '../../../common/utils.ts';

type OfferPageProps = {
  currentOffer: OfferType;
  reviews: ReviewType[];
  nearOffers: OfferPreviewType[];
};

export default function OfferPage({currentOffer, reviews, nearOffers}: OfferPageProps): JSX.Element {
  const {
    images,
    type,
    isPremium,
    title,
    isFavorite,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description
  }: OfferType = currentOffer;

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((image) =>
              <OfferImage image={image} offerType={type} key={image}/>
            )}
          </div>
        </div>

        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium
              ? <div className="offer__mark"><span>Premium</span></div>
              : ''}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <button className={`offer__bookmark-button ${isFavorite ? 'offer__bookmark-button--active' : ''} button`} type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
              </button>
            </div>

            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${calculateRatingWidth(rating)}%`}}></span> <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>

            <OfferFeaturesList type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>

            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b> <span className="offer__price-text">&nbsp;night</span>
            </div>

            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <OfferInsideList goods={goods}/>
            </div>

            <OfferHost host={host} description={description}/>

            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <OfferReviewsList reviews={reviews}/>
              <OfferReviewForm/>
            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <OfferNearPlaces nearOffers={nearOffers}/>
      </div>
    </>
  );
}

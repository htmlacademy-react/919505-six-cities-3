import {getAuthorizationStatus} from '../../utils/common';
import {AuthorizationStatus, BookmarkButtonParams, MAX_OFFER_PHOTOS, RatingPanelType} from '../../utils/const.ts';
import {TOffer, TReview} from '../../utils/types';
import OfferImage from '../offer-image';
import ButtonBookmark from '../button-bookmark';
import RatingPanel from '../rating-panel';
import OfferFeaturesList from '../offer-features-list';
import OfferInsideList from '../offer-inside-list';
import OfferHost from '../offer-host';
import OfferReviewsList from '../offer-reviews-list';
import OfferReviewForm from '../offer-review-form';

type TOfferProps = {
  offer: TOffer;
  reviews: TReview[];
};

export default function OfferDetails({offer, reviews}: TOfferProps): JSX.Element {
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
  } = offer;

  const authorizationStatus = getAuthorizationStatus();

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.slice(0, MAX_OFFER_PHOTOS).map((image) =>
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
            <ButtonBookmark type={BookmarkButtonParams.type.view} isActive={isFavorite}/>
          </div>

          <RatingPanel type={RatingPanelType.Offer} rating={rating}/>
          <OfferFeaturesList type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>

          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b> <span className="offer__price-text">&nbsp;night</span>
          </div>

          <OfferInsideList goods={goods}/> <OfferHost host={host} description={description}/>

          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
            </h2>
            <OfferReviewsList reviews={reviews}/> {authorizationStatus === AuthorizationStatus.Auth
              ? <OfferReviewForm/>
              : ''}
          </section>
        </div>
      </div>
      <section className="offer__map map"></section>
    </section>
  );
}

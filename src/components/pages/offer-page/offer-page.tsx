import OfferImage from '../../offer-image/offer-image';
import OfferFeaturesList from '../../offer-features-list/offer-features-list';
import OfferInsideList from '../../offer-inside-list/offer-inside-list';
import OfferHost from '../../offer-host/offer-host';
import OfferReviewsList from '../../offer-reviews-list/offer-reviews-list';
import OfferReviewForm from '../../offer-review-form/offer-review-form';
import OfferNearPlaces from '../../offer-near-places/offer-near-places';
import {OfferView, OfferPreview, Review} from '../../../common/types.ts';
import ButtonBookmark from '../../button-bookmark/button-bookmark.tsx';
import {BookmarkButtonParams, RatingPanelType} from '../../../common/const.ts';
import RatingPanel from '../../rating-panel/rating-panel.tsx';

type OfferPageProps = {
  offerView: OfferView;
  reviews: Review[];
  nearOffers: OfferPreview[];
};

export default function OfferPage({offerView, reviews, nearOffers}: OfferPageProps): JSX.Element {
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
  }: OfferView = offerView;

  return (
    <main className="page__main page__main--offer">
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
              <ButtonBookmark type={BookmarkButtonParams.VIEW} isActive={isFavorite}/>
            </div>

            <RatingPanel type={RatingPanelType.OFFER} rating={rating}/>
            <OfferFeaturesList type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>

            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b> <span className="offer__price-text">&nbsp;night</span>
            </div>

            <OfferInsideList goods={goods}/>
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
    </main>
  );
}

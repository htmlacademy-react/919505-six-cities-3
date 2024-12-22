import OfferImage from '../../components/offer-image/offer-image.tsx';
import OfferFeaturesList from '../../components/offer-features-list/offer-features-list.tsx';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list.tsx';
import OfferHost from '../../components/offer-host/offer-host.tsx';
import OfferReviewsList from '../../components/offer-reviews-list/offer-reviews-list.tsx';
import OfferReviewForm from '../../components/offer-review-form/offer-review-form.tsx';
import OfferNearPlaces from '../../components/offer-near-places/offer-near-places.tsx';
import {OfferView, OfferPreview, Review} from '../../utils/types.ts';
import ButtonBookmark from '../../components/button-bookmark/button-bookmark.tsx';
import {BookmarkButtonParams, RatingPanelType} from '../../utils/const.ts';
import RatingPanel from '../../components/rating-panel/rating-panel.tsx';

type OfferPageProps = {
  offerView: OfferView;
  reviews: Review[];
  nearOffers: OfferPreview[];
};

export default function OfferScreen({offerView, reviews, nearOffers}: OfferPageProps): JSX.Element {
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

            <RatingPanel type={RatingPanelType.Offer} rating={rating}/>
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

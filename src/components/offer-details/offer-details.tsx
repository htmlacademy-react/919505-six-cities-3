import {BookmarkButtonParams, MapType, MAX_OFFER_PHOTOS, RatingPanelType} from '../../utils/const.ts';
import {TMapCity, TMapPoint, TOffer} from '../../utils/types';
import OfferImage from '../offer-image';
import ButtonBookmark from '../button-bookmark';
import RatingPanel from '../rating-panel';
import OfferFeaturesList from '../offer-features-list';
import OfferInsideList from '../offer-inside-list';
import OfferHost from '../offer-host';
import OfferReviewsSection from '../offer-reviews-section';
import Map from '../map';

type TOfferProps = {
  offer: TOffer;
  cityObjectForMap: TMapCity;
  pointsForMap: TMapPoint[];
  currentActivePoint: TMapPoint | null;
};

export default function OfferDetails({offer, cityObjectForMap, pointsForMap, currentActivePoint}: TOfferProps): JSX.Element {
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

          <OfferInsideList goods={goods}/>
          <OfferHost host={host} description={description}/>
          <OfferReviewsSection/>
        </div>
      </div>
      <section className="offer__map map">
        <Map city={cityObjectForMap} points={pointsForMap} selectedPoint={currentActivePoint} mapType={MapType.Offer}/>
      </section>
    </section>
  );
}

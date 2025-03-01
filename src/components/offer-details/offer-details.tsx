import {BookmarkButton, MapType, MAX_OFFER_PHOTOS, RatingPanelType} from '../../const.ts';
import {TOffer, TOfferPreview} from '../../types/offers';
import OfferImage from '../offer-image';
import ButtonBookmark from '../button-bookmark';
import RatingPanel from '../rating-panel';
import OfferFeaturesList from '../offer-features-list';
import OfferInsideList from '../offer-inside-list';
import OfferHost from '../offer-host';
import OfferReviewsSection from '../offer-reviews-section';
import {useAppSelector} from '../../hooks/store';
import {offersSliceSelectors} from '../../store/slices/offers';
import {makeFirstLetterToUpperCase} from '../../utils';
import Map from '../map';

type TOfferProps = {
  offer: TOffer;
  nearbyOffers: TOfferPreview[];
};

export default function OfferDetails({offer, nearbyOffers}: TOfferProps): JSX.Element {
  const {
    id,
    images,
    type,
    isPremium,
    title,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
    location,
    isFavorite
  } = offer;

  const offers = useAppSelector(offersSliceSelectors.offers);
  const currentOfferPreview = offers.find((item) => item.id === id);

  const offersForMap = [...nearbyOffers];

  if (currentOfferPreview) {
    offersForMap.push(currentOfferPreview);
  } else {
    offersForMap.push({
      id,
      title,
      type,
      price,
      city,
      location,
      isFavorite,
      isPremium,
      rating,
      previewImage: ''
    });
  }

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
            <ButtonBookmark offerId={id} type={BookmarkButton.View}/>
          </div>

          <RatingPanel type={RatingPanelType.Offer} rating={rating}/>
          <OfferFeaturesList type={makeFirstLetterToUpperCase(type)} bedrooms={bedrooms} maxAdults={maxAdults}/>

          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b> <span className="offer__price-text">&nbsp;night</span>
          </div>

          <OfferInsideList goods={goods}/>
          <OfferHost host={host} description={description}/>
          <OfferReviewsSection/>
        </div>
      </div>
      {offersForMap.length > 0 && <Map offers={offersForMap} mapType={MapType.Offer} defaultActiveId={id}/>}
    </section>
  );
}

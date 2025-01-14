import {filterOffersByCity} from '../../utils/common';
import {Cities} from '../../utils/const';
import {TOffer, TReview} from '../../utils/types';
import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {offerPreviews} from '../../mocks/offer-previews';
import useMapData from '../../hooks/use-map-data';

type TOfferPageProps = {
  offer: TOffer;
  reviews: TReview[];
};

export default function OfferScreen({offer, reviews}: TOfferPageProps): JSX.Element {
  const currentCity = Cities[3];
  const nearOffers = filterOffersByCity(offerPreviews, currentCity);

  const {
    cityObjectForMap,
    pointsForMap,
    currentActivePoint,
    handleCardHover
  } = useMapData(nearOffers);

  return (
    <main className="page__main page__main--offer">
      <OfferDetails offer={offer} reviews={reviews} cityObjectForMap={cityObjectForMap} pointsForMap={pointsForMap} currentActivePoint={currentActivePoint}/>
      <div className="container">
        <OfferNearPlaces nearOffers={nearOffers} handleCardHover={handleCardHover}/>
      </div>
    </main>
  );
}

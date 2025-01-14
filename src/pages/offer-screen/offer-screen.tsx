import {getScreenData} from '../../utils/common';
import {MAX_NEARBY_OFFERS} from '../../utils/const';
import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import useMapData from '../../hooks/use-map-data';
import {offer} from '../../mocks/offer';

export default function OfferScreen(): JSX.Element {
  const [, offers] = getScreenData();
  const nearOffers = offers.filter((item) => item.id !== offer.id).slice(0, MAX_NEARBY_OFFERS);
  const dataForPins = [...nearOffers, offer];

  const {
    cityObjectForMap,
    pointsForMap,
    currentActivePoint
  } = useMapData(dataForPins, offer);

  return (
    <main className="page__main page__main--offer">
      <OfferDetails
        offer={offer}
        cityObjectForMap={cityObjectForMap}
        pointsForMap={pointsForMap}
        currentActivePoint={currentActivePoint}
      />
      <div className="container">
        <OfferNearPlaces nearOffers={nearOffers}/>
      </div>
    </main>
  );
}

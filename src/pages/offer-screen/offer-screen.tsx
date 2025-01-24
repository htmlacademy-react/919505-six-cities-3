import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {offer} from '../../mocks/offer';
import {useAppSelector} from '../../hooks/store';
import {MAX_NEARBY_OFFERS} from '../../common/const';
import {appProcessSelectors} from '../../store/app-process/app-process';
import {appDataSelectors} from '../../store/app-data/app-data';

export default function OfferScreen(): JSX.Element {
  const currentOffer = useAppSelector(appProcessSelectors.currentOffer);
  const currentCity = useAppSelector(appProcessSelectors.currentCity);
  const offers = useAppSelector(appDataSelectors.currentCitySortedOffers);

  const nearOffers = offers.filter((item) =>
    item.city.name === currentCity && item.id !== currentOffer)
    .slice(0, MAX_NEARBY_OFFERS);

  return (
    <main className="page__main page__main--offer">
      <OfferDetails
        offer={offer}
        nearOffers={nearOffers}
      />
      <div className="container">
        <OfferNearPlaces nearOffers={nearOffers}/>
      </div>
    </main>
  );
}

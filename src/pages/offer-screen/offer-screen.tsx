import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {offer} from '../../mocks/offer';
import {useAppSelector} from '../../hooks/store';
import {getCurrentCityOffers} from '../../store/app-data/selectors';
import {MAX_NEARBY_OFFERS} from '../../common/const';
import {appProcessSelectors} from '../../store/app-process/app-process';

export default function OfferScreen(): JSX.Element {
  const currentOffer = useAppSelector(appProcessSelectors.currentOffer);
  const currentCity = useAppSelector(appProcessSelectors.currentCity);
  const currentCityOffers = useAppSelector(getCurrentCityOffers);

  const nearOffers = currentCityOffers.filter((item) =>
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

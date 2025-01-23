import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {offer} from '../../mocks/offer';
import {useAppSelector} from '../../hooks/store';
import {getOffers} from '../../store/app-data/selectors';
import {getCurrentCity, getCurrentOffer} from '../../store/app-process/selectors';
import {MAX_NEARBY_OFFERS} from '../../common/const';

export default function OfferScreen(): JSX.Element {
  const currentOffer = useAppSelector(getCurrentOffer);
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);

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

import {filterOffersByCity} from '../../utils/common';
import {MAX_NEARBY_OFFERS} from '../../utils/const';
import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {offer} from '../../mocks/offer';
import {useAppSelector} from '../../hooks/store';

export default function OfferScreen(): JSX.Element {
  const currentCity = useAppSelector((state) => state.APP.currentCity);
  const offers = useAppSelector((state) => state.DATA.offers);

  const currentCityOffers = filterOffersByCity(offers, currentCity);
  const nearOffers = currentCityOffers.filter((item) => item.id !== offer.id).slice(0, MAX_NEARBY_OFFERS);

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

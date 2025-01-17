import {getScreenData} from '../../utils/common';
import {MAX_NEARBY_OFFERS} from '../../utils/const';
import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {offer} from '../../mocks/offer';

export default function OfferScreen(): JSX.Element {
  const [, offers] = getScreenData();
  const nearOffers = offers.filter((item) => item.id !== offer.id).slice(0, MAX_NEARBY_OFFERS);

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

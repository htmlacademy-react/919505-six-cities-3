import {TOffer, TReview} from '../../utils/types';
import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {filterOffersByCity} from '../../utils/common';
import {offerPreviews} from '../../mocks/offer-previews';
import {Cities} from '../../utils/const';

type TOfferPageProps = {
  offer: TOffer;
  reviews: TReview[];
};

export default function OfferScreen({offer, reviews}: TOfferPageProps): JSX.Element {
  const currentCity = Cities[3];
  const nearOffers = filterOffersByCity(offerPreviews, currentCity);

  return (
    <main className="page__main page__main--offer">
      <OfferDetails offer={offer} reviews={reviews}/>
      <div className="container">
        <OfferNearPlaces nearOffers={nearOffers}/>
      </div>
    </main>
  );
}

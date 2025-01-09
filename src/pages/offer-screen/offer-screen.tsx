import {OfferPreview, Offer, Review} from '../../utils/types';
import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';

type OfferPageProps = {
  offer: Offer;
  reviews: Review[];
  nearOffers: OfferPreview[];
};

export default function OfferScreen({offer, reviews, nearOffers}: OfferPageProps): JSX.Element {
  return (
    <main className="page__main page__main--offer">
      <OfferDetails offer={offer} reviews={reviews}/>
      <div className="container">
        <OfferNearPlaces nearOffers={nearOffers}/>
      </div>
    </main>
  );
}

import OfferNearPlaces from '../../components/offer-near-places/offer-near-places.tsx';
import {OfferPreview, OfferView, Review} from '../../utils/types.ts';
import Offer from '../../components/offer/offer.tsx';

type OfferPageProps = {
  offerView: OfferView;
  reviews: Review[];
  nearOffers: OfferPreview[];
};

export default function OfferScreen({offerView, reviews, nearOffers}: OfferPageProps): JSX.Element {
  return (
    <main className="page__main page__main--offer">
      <Offer offerView={offerView} reviews={reviews}/>
      <div className="container">
        <OfferNearPlaces nearOffers={nearOffers}/>
      </div>
    </main>
  );
}

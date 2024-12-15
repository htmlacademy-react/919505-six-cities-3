import PlaceCard from '../place-card/place-card.tsx';
import {CardType} from '../../const';
import {OfferType} from '../../types.ts';

type OfferNearPlacesProps = {
  nearOffers: OfferType[];
};

export default function OfferNearPlaces({nearOffers}: OfferNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((offer) => <PlaceCard cardData={offer} cardType={CardType.NEAR} key={offer.id}/>)}
      </div>
    </section>
  );
}

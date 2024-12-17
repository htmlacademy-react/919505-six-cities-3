import OfferCard from '../offer-card/offer-card.tsx';
import {CardType} from '../../common/const.ts';
import {OfferCardType} from '../../common/types.ts';

type OfferNearPlacesProps = {
  nearOffers: OfferCardType[];
};

export default function OfferNearPlaces({nearOffers}: OfferNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((offer) => <OfferCard cardData={offer} cardType={CardType.NEAR} key={offer.id}/>)}
      </div>
    </section>
  );
}

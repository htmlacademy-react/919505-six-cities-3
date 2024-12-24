import {OfferCardParams} from '../../utils/const.ts';
import {OfferPreview} from '../../utils/types.ts';
import OfferCardList from '../offer-card-list/offer-card-list.tsx';

type OfferNearPlacesProps = {
  nearOffers: OfferPreview[];
};

export default function OfferNearPlaces({nearOffers}: OfferNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <OfferCardList offers={nearOffers} cardType={OfferCardParams.type.near}/>
    </section>
  );
}

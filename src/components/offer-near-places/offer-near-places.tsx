import {OfferCardParams} from '../../common/const';
import {TOfferPreview} from '../../types/offers';
import OfferCardList from '../offer-card-list';

type TOfferNearPlacesProps = {
  nearOffers: TOfferPreview[];
};

export default function OfferNearPlaces({nearOffers}: TOfferNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <OfferCardList offers={nearOffers} cardType={OfferCardParams.type.near}/>
    </section>
  );
}

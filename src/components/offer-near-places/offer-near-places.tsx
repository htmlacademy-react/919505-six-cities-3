import {OfferCardParams} from '../../common/const';
import {TOfferPreview} from '../../types/offers';
import OfferCardList from '../offer-card-list';

type TOfferNearPlacesProps = {
  nearbyOffers: TOfferPreview[];
};

export default function OfferNearPlaces({nearbyOffers}: TOfferNearPlacesProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <OfferCardList offers={nearbyOffers} cardType={OfferCardParams.type.near}/>
      </section>
    </div>
  );
}

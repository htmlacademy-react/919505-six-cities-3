import PlaceCard from '../place-card/place-card.tsx';
import {CardType} from '../../const';

export default function OfferNearPlaces(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        <PlaceCard cardType={CardType.NEAR}/>
      </div>
    </section>
  );
}

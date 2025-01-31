import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import Map from '../map';
import {TOfferPreview} from '../../types/offers';

type TPlacesContainerProps = {
  offers: TOfferPreview[];
  isEmpty: boolean;
}

export default function PlacesContainer({offers, isEmpty}: TPlacesContainerProps): JSX.Element {
  return (
    <>
      {isEmpty
        ? <OfferListEmpty/>
        : <OfferList offers={offers}/>}
      <div className="cities__right-section">
        {!isEmpty &&
          <section className="cities__map map">
            <Map offers={offers}/>
          </section>}
      </div>
    </>
  );
}

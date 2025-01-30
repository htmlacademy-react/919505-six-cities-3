import {TOfferPreview} from '../../types/offers';
import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import Map from '../map';

type TMainContainerProps = {
  offers: TOfferPreview[];
  isEmpty: boolean;
}

export default function MainContainer({offers, isEmpty}: TMainContainerProps): JSX.Element {
  return (
    <div className="cities">
      <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>
        {isEmpty
          ? <OfferListEmpty/>
          : <OfferList offers={offers}/>}
        <div className="cities__right-section">
          {!isEmpty &&
            <section className="cities__map map">
              <Map offers={offers}/>
            </section>}
        </div>
      </div>
    </div>
  );
}

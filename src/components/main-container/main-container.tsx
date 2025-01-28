import {TCityName, TOfferPreview} from '../../types/offers';
import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import Map from '../map';

type TMainContainerProps = {
  currentCityName: TCityName;
  offers: TOfferPreview[];
  isEmpty: boolean;
}

export default function MainContainer({currentCityName, offers, isEmpty}: TMainContainerProps): JSX.Element {

  return (
    <div className="cities">
      <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>
        {isEmpty
          ? <OfferListEmpty currentCity={currentCityName}/>
          : <OfferList currentCityName={currentCityName} offers={offers}/>}
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

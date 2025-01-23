import {TCityName, TOfferPreview} from '../../types/offers';
import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import Map from '../map';
import useMapData from '../../hooks/use-map-data';

type TMainContainerProps = {
  currentCityName: TCityName;
  currentCityOffers: TOfferPreview[];
  isEmpty: boolean;
}

export default function MainContainer({currentCityName, currentCityOffers, isEmpty}: TMainContainerProps): JSX.Element {
  const {
    cityObjectForMap,
    pointsForMap,
    currentActivePoint,
    handleCardHover
  } = useMapData(currentCityOffers);

  return (
    <div className="cities">
      <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>
        {isEmpty
          ? <OfferListEmpty currentCity={currentCityName}/>
          : <OfferList currentCityName={currentCityName} offers={currentCityOffers} handleCardHover={handleCardHover}/>}
        <div className="cities__right-section">
          {!isEmpty &&
            <section className="cities__map map">
              <Map city={cityObjectForMap} points={pointsForMap} selectedPoint={currentActivePoint}/>
            </section>}
        </div>
      </div>
    </div>
  );
}

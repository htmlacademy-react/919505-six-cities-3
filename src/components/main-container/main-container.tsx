import {useState} from 'react';
import {adaptCityObjectToMap, adaptOffersToMapPoints} from '../../utils/common';
import {TMapPoint, TOfferPreview} from '../../utils/types';
import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import Map from '../map';

type TMainContainerProps = {
  currentCityName: string;
  currentCityOffers: TOfferPreview[];
  isEmpty: boolean;
}

export default function MainContainer({currentCityName, currentCityOffers, isEmpty}: TMainContainerProps): JSX.Element {
  const cityObjectForMap = adaptCityObjectToMap(currentCityOffers[0].city);
  const pointsForMap: TMapPoint[] = adaptOffersToMapPoints(currentCityOffers);

  const [currentActivePoint, setCurrentActivePoint] = useState<TMapPoint | null>(null);

  const handleCardHover = (cardId?: string) => {
    const currentPoint = pointsForMap.find((point) => point.id === cardId);
    setCurrentActivePoint(currentPoint || null);
  };

  return (
    <div className="cities">
      <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>
        {isEmpty
          ? <OfferListEmpty currentCity={currentCityName}/>
          : <OfferList offers={currentCityOffers} handleCardHover={handleCardHover}/>}
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

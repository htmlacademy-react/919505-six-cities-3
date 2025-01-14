import {Cities} from '../../utils/const';
import {TMapPoint} from '../../utils/types';
import CitiesNavList from '../../components/cities-nav-list';
import {offerPreviews} from '../../mocks/offer-previews';
import {adaptCityObjectToMap, adaptOffersToMapPoints, filterOffersByCity} from '../../utils/common';
import Map from '../../components/map';
import {useState} from 'react';
import OfferList from '../../components/offer-list';
import OfferListEmpty from '../../components/offer-list-empty';

function MainScreen(): JSX.Element {
  const currentCityName = Cities[3];
  const currentCityOffers = filterOffersByCity(offerPreviews, currentCityName);
  const cityObjectForMap = adaptCityObjectToMap(currentCityOffers[0].city);
  const pointsForMap: TMapPoint[] = adaptOffersToMapPoints(currentCityOffers);
  const isEmpty = currentCityOffers.length === 0;

  const [currentActivePoint, setCurrentActivePoint] = useState<TMapPoint | null>(null);

  const handleCardHover = (cardId?: string) => {
    const currentPoint = pointsForMap.find((point) => point.id === cardId);
    setCurrentActivePoint(currentPoint || null);
  };

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList currentCity={currentCityName}/>
        </section>
      </div>

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
    </main>
  );
}

export default MainScreen;

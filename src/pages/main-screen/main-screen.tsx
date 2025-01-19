import {filterOffersByCity} from '../../utils/common';
import CitiesNavList from '../../components/cities-nav-list';
import MainContainer from '../../components/main-container';
import {useState} from 'react';
import {offerPreviews} from '../../mocks/offer-previews';
import {Cities} from '../../utils/const';

function MainScreen(): JSX.Element {
  const [currentCity, setCurrentCity] = useState<string>(Cities[3]);

  const currentCityOffers = filterOffersByCity(offerPreviews, currentCity);
  const isEmpty = currentCityOffers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList currentCity={currentCity} handleCityChange={setCurrentCity}/>
        </section>
      </div>
      <MainContainer currentCityName={currentCity} currentCityOffers={currentCityOffers} isEmpty={isEmpty}/>
    </main>
  );
}

export default MainScreen;

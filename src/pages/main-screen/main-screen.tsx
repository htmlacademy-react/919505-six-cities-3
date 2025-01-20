import {filterOffersByCity} from '../../utils/common';
import CitiesNavList from '../../components/cities-nav-list';
import MainContainer from '../../components/main-container';
import {useAppSelector} from '../../hooks/store';

function MainScreen(): JSX.Element {
  const currentCity = useAppSelector((state) => state.APP.currentCity);
  const offers = useAppSelector((state) => state.DATA.offers);

  const currentCityOffers = filterOffersByCity(offers, currentCity);
  const isEmpty = currentCityOffers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList currentCity={currentCity}/>
        </section>
      </div>
      <MainContainer currentCityName={currentCity} currentCityOffers={currentCityOffers} isEmpty={isEmpty}/>
    </main>
  );
}

export default MainScreen;

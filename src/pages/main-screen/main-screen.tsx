import {filterOffersByCity} from '../../utils/common';
import {Cities} from '../../utils/const';
import CitiesNavList from '../../components/cities-nav-list';
import MainContainer from '../../components/main-container';
import {offerPreviews} from '../../mocks/offer-previews';

function MainScreen(): JSX.Element {
  const currentCityName = Cities[3];
  const currentCityOffers = filterOffersByCity(offerPreviews, currentCityName);
  const isEmpty = currentCityOffers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList currentCity={currentCityName}/>
        </section>
      </div>
      <MainContainer currentCityName={currentCityName} currentCityOffers={currentCityOffers} isEmpty={isEmpty}/>
    </main>
  );
}

export default MainScreen;

import {getScreenData} from '../../utils/common';
import CitiesNavList from '../../components/cities-nav-list';
import MainContainer from '../../components/main-container';

function MainScreen(): JSX.Element {
  const [currentCityName, currentCityOffers ] = getScreenData();
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

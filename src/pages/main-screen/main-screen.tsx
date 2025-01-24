import CitiesNavList from '../../components/cities-nav-list';
import MainContainer from '../../components/main-container';
import {useAppSelector} from '../../hooks/store';
import {appProcessSelectors} from '../../store/app-process';
import {appDataSelectors} from '../../store/app-data';

function MainScreen(): JSX.Element {
  const currentCity = useAppSelector(appProcessSelectors.currentCity);
  const offers = useAppSelector(appDataSelectors.currentCitySortedOffers);

  const isEmpty = offers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList currentCity={currentCity}/>
        </section>
      </div>
      <MainContainer currentCityName={currentCity} offers={offers} isEmpty={isEmpty}/>
    </main>
  );
}

export default MainScreen;

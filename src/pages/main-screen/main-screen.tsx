import CitiesNavList from '../../components/cities-nav-list';
import MainContainer from '../../components/main-container';
import {useAppSelector} from '../../hooks/store';
import {getCurrentCityOffers} from '../../store/app-data/selectors';
import {getCurrentCity} from '../../store/app-process/selectors';

function MainScreen(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const currentCityOffers = useAppSelector(getCurrentCityOffers);

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

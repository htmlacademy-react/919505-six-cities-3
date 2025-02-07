import CitiesNavList from '../../components/cities-nav-list';
import MainContainer from '../../components/main-container';
import {useAppSelector} from '../../hooks/store';
import {offersSliceSelectors} from '../../store/slices/offers';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(offersSliceSelectors.currentCitySortedOffers);
  const isEmpty = offers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList/>
        </section>
      </div>
      <MainContainer offers={offers} isEmpty={isEmpty}/>
    </main>
  );
}

export default MainScreen;

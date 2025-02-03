import CitiesNavList from '../../components/cities-nav-list';
import MainContainer from '../../components/main-container';
import {useActionCreators, useAppSelector} from '../../hooks/store';
import {appProcessActions} from '../../store/slice/app-process';
import {appDataSelectors} from '../../store/slice/app-data';
import {useEffect} from 'react';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(appDataSelectors.currentCitySortedOffers);
  const {changeActiveOfferId} = useActionCreators(appProcessActions);

  const isEmpty = offers.length === 0;

  useEffect(() => {
    changeActiveOfferId(null);
  }, [changeActiveOfferId]);

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

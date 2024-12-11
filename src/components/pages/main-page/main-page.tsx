import PlaceCard from '../../place-card/place-card';
import CitiesNavList from '../../cities-nav-list/cities-nav-list.tsx';
import OffersSortingPanel from '../../offers-sorting-panel/offers-sorting-panel.tsx';
import {CardType} from '../../../const';

type MainPageProps = {
  offersCount: number;
}

const generatePlaceCards = (offersCount: number) => {
  const cards = [];

  for (let i = 0; i < offersCount; i++) {
    cards.push(<PlaceCard cardType={CardType.DEFAULT} key={i}/>);
  }

  return cards;
};

function MainPage({offersCount}: MainPageProps) {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList/>
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in Amsterdam</b>

            <OffersSortingPanel/>

            <div className="cities__places-list places__list tabs__content">
              {generatePlaceCards(offersCount)}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

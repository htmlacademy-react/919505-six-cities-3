import {OfferCardParams} from '../../utils/const.ts';
import {OfferPreview} from '../../utils/types.ts';
import OfferCard from '../../components/offer-card/offer-card.tsx';
import CitiesNavList from '../../components/cities-nav-list/cities-nav-list.tsx';
import OffersSortingPanel from '../../components/offers-sorting-panel/offers-sorting-panel.tsx';

type MainPageProps = {
  currentCity: string;
  offers: OfferPreview[];
}

function MainScreen({currentCity, offers}: MainPageProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList currentCity={currentCity}/>
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>

            <OffersSortingPanel/>

            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => (
                <OfferCard cardData={offer} cardType={OfferCardParams.type.default} key={offer.id}/>
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;

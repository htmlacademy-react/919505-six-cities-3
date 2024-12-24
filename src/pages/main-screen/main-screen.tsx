import {OfferCardParams} from '../../utils/const.ts';
import {OfferPreview} from '../../utils/types.ts';
import OfferCard from '../../components/offer-card/offer-card.tsx';
import CitiesNavList from '../../components/cities-nav-list/cities-nav-list.tsx';
import OffersSortingPanel from '../../components/offers-sorting-panel/offers-sorting-panel.tsx';

type MainPageProps = {
  currentCity: string;
  offers: OfferPreview[];
}

function createEmptyOffersList(currentCity: string) {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
      </div>
    </section>
  );
}

function createOffersList(offers: OfferPreview[]) {
  return (
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
  );
}

function MainScreen({currentCity, offers}: MainPageProps): JSX.Element {
  const isEmpty = offers.length === 0;
  console.log(currentCity);

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesNavList currentCity={currentCity}/>
        </section>
      </div>

      <div className="cities">
        <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>
          {isEmpty
            ? createEmptyOffersList(currentCity)
            : createOffersList(offers)}
          <div className="cities__right-section">
            {!isEmpty && <section className="cities__map map"></section>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;

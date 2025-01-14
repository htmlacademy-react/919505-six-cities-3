import {Cities, OfferCardParams} from '../../utils/const';
import {TOfferPreview} from '../../utils/types';
import CitiesNavList from '../../components/cities-nav-list';
import OffersSortingPanel from '../../components/offers-sorting-panel';
import OfferCardList from '../../components/offer-card-list';
import {offerPreviews} from '../../mocks/offer-previews';
import {filterOffersByCity} from '../../utils/common';

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

function createOffersList(offers: TOfferPreview[]) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <OffersSortingPanel/>
      <OfferCardList offers={offers} cardType={OfferCardParams.type.default}/>
    </section>
  );
}

function MainScreen(): JSX.Element {
  const currentCity = Cities[3];
  const currentCityOffers = filterOffersByCity(offerPreviews, currentCity);
  const isEmpty = currentCityOffers.length === 0;

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
            : createOffersList(currentCityOffers)}
          <div className="cities__right-section">
            {!isEmpty && <section className="cities__map map"></section>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;

import {CardType} from '../../../common/const.ts';
import {OfferPreviewType} from '../../../common/types.ts';
import PlaceCard from '../../place-card/place-card';
import CitiesNavList from '../../cities-nav-list/cities-nav-list';
import OffersSortingPanel from '../../offers-sorting-panel/offers-sorting-panel';

type MainPageProps = {
  currentCity: string;
  offers: OfferPreviewType[];
}

function MainPage({currentCity, offers}: MainPageProps): JSX.Element {
  return (
    <>
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
                <PlaceCard cardData={offer} cardType={CardType.DEFAULT} key={offer.id}/>
              ))}
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

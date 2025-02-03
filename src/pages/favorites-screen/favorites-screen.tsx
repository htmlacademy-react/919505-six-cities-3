import FavoritesList from '../../components/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list-empty';
import {useAppSelector} from '../../hooks/store';
import {appDataSelectors} from '../../store/slice/app-data';
import {generateFavoriteOffersObject} from '../../common/utils';

export default function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(appDataSelectors.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoritesObject = generateFavoriteOffersObject(favoriteOffers);

  const isEmpty = Object.keys(favoritesObject).length === 0;

  return (
    <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`}>
      <div className="page__favorites-container container">
        <section className={`favorites ${isEmpty ? 'favorites--empty' : ''}`}>
          {isEmpty
            ? <FavoritesListEmpty/>
            : <FavoritesList favoritesObject={favoritesObject}/>}
        </section>
      </div>
    </main>
  );
}


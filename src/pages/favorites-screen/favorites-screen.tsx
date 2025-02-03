import FavoritesList from '../../components/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list-empty';
import {useAppSelector} from '../../hooks/store';
import {generateFavoriteOffersObject} from '../../common/utils';
import {favoritesSlice} from '../../store/slice/favorites/favorites-slice';

export default function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(favoritesSlice.selectors.offers);
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


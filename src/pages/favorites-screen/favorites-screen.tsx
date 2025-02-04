import FavoritesList from '../../components/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list-empty';
import {useAppSelector} from '../../hooks/store';
import {generateFavoriteOffersObject} from '../../common/utils';
import {offersSliceSelectors} from '../../store/slices/offers';

export default function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(offersSliceSelectors.favoriteOffers);
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


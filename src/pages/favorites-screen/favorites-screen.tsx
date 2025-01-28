import {TFavoritesObject} from '../../types/offers';
import FavoritesList from '../../components/favorites-list';
import FavoritesListEmpty from '../../components/favorites-list-empty';

type TFavoritesPageProps = {
  favoritesObject: TFavoritesObject;
}

export default function FavoritesScreen({favoritesObject}: TFavoritesPageProps): JSX.Element {
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


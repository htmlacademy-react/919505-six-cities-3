import {FavoritesObject} from '../../utils/types.ts';
import FavoritesList from '../../components/favorites-list/favorites-list.tsx';

type FavoritesPageProps = {
  favoritesObject: FavoritesObject;
}

function createEmptyStatusContainer() {
  return (
    <>
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">
          Save properties to narrow down search or plan your future trips.
        </p>
      </div>
    </>
  );
}

function createFavoritesList(favoritesObject: FavoritesObject) {
  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesList favoritesObject={favoritesObject}/>
    </>
  );
}

export default function FavoritesScreen({favoritesObject}: FavoritesPageProps): JSX.Element {
  const isEmpty = Object.keys(favoritesObject).length === 0;
  return (
    <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`}>
      <div className="page__favorites-container container">
        <section className={`favorites ${isEmpty ? 'favorites--empty' : ''}`}>
          {isEmpty
            ? createEmptyStatusContainer()
            : createFavoritesList(favoritesObject)}
        </section>
      </div>
    </main>
  );
}


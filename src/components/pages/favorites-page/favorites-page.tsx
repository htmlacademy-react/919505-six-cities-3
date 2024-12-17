import {FavoritesObjectType} from '../../../common/types.ts';
import FavoritesList from '../../favorites-list/favorites-list.tsx';

type FavoritesPageProps = {
  favoritesObject: FavoritesObjectType;
}

export default function FavoritesPage({favoritesObject}: FavoritesPageProps): JSX.Element {

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoritesList favoritesObject={favoritesObject}/>
      </section>
    </div>
  );
}

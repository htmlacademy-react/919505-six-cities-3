import {FavoritesObject} from '../../common/types.ts';
import FavoritesItem from '../favorites-item/favorites-item';

type FavoritesListProps = {
  favoritesObject: FavoritesObject;
}

export default function FavoritesList({favoritesObject}: FavoritesListProps): JSX.Element {

  return (
    <ul className="favorites__list">
      {Object.keys(favoritesObject).map((city) => <FavoritesItem city={city} offers={favoritesObject[city]} key={city}/>)}
    </ul>
  );
}

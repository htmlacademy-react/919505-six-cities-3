import {TFavoritesObject} from '../../types/offers';
import FavoritesItem from '../favorites-item';

type TFavoritesListProps = {
  favoritesObject: TFavoritesObject;
}

export default function FavoritesList({favoritesObject}: TFavoritesListProps): JSX.Element {

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoritesObject).map((city) =>
          <FavoritesItem city={city} offers={favoritesObject[city]} key={city}/>
        )}
      </ul>
    </>
  );
}

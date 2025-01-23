import {Cities} from '../../utils/const';
import CitiesNavItem from '../cities-nav-item';
import {TCityName} from '../../types/offers';

type TCitiesNavListProps = {
  currentCity: TCityName;
};

export default function CitiesNavList({currentCity}: TCitiesNavListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CitiesNavItem key={city} city={city} currentCity={currentCity}/>
      ))}
    </ul>
  );
}

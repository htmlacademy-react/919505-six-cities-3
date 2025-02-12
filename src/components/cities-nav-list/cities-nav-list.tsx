import {Cities} from '../../const';
import CitiesNavItem from '../cities-nav-item';

export default function CitiesNavList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CitiesNavItem key={city} city={city}/>
      ))}
    </ul>
  );
}

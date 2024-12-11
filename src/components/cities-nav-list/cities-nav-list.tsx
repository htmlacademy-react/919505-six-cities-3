import {Cities} from '../../const';
import CitiesNavItem from '../cities-nav-item/cities-nav-item';

export default function CitiesNavList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CitiesNavItem city={city} key={city}/>
      ))}
    </ul>
  );
}

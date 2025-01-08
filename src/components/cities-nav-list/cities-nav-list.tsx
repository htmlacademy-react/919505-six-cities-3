import {Cities} from '../../utils/const';
import CitiesNavItem from '../cities-nav-item';

type CitiesNavListProps = {
  currentCity: string;
};

export default function CitiesNavList({currentCity}: CitiesNavListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CitiesNavItem city={city} currentCity={currentCity} key={city}/>
      ))}
    </ul>
  );
}

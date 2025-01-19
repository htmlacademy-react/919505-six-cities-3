import {Cities} from '../../utils/const';
import CitiesNavItem from '../cities-nav-item';

type TCitiesNavListProps = {
  currentCity: string;
  handleCityChange: (city: string) => void;
};

export default function CitiesNavList({currentCity, handleCityChange}: TCitiesNavListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CitiesNavItem key={city} city={city} currentCity={currentCity} handleCityChange={handleCityChange}/>
      ))}
    </ul>
  );
}

import {Cities} from '../../common/const';
import CitiesNavItem from '../cities-nav-item';
import {useAppSelector} from '../../hooks/store';
import {appProcessSelectors} from '../../store/slice/app-process';

export default function CitiesNavList(): JSX.Element {
  const currentCity = useAppSelector(appProcessSelectors.currentCity);

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CitiesNavItem key={city} city={city} currentCity={currentCity}/>
      ))}
    </ul>
  );
}

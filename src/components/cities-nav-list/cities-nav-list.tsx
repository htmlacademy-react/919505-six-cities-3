import {memo} from 'react';
import {Cities} from '../../const';
import CitiesNavItem from '../cities-nav-item';
import {useAppSelector} from '../../hooks/store';
import {appSliceSelectors} from '../../store/slices/app';

function CitiesNavList(): JSX.Element {
  const currentCity = useAppSelector(appSliceSelectors.currentCity);

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CitiesNavItem key={city} city={city} currentCity={currentCity}/>
      ))}
    </ul>
  );
}

const MemorizedCitiesNavList = memo(CitiesNavList);
export default MemorizedCitiesNavList;

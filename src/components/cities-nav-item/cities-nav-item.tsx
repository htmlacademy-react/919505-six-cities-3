import {useActionCreators, useAppSelector} from '../../hooks/store';
import {appSliceActions, appSliceSelectors} from '../../store/slices/app';
import {TCityName} from '../../types/offers';

type TCitiesNavItemProps = {
  city: TCityName;
}

export default function CitiesNavItem({city}: TCitiesNavItemProps): JSX.Element {
  const currentCity = useAppSelector(appSliceSelectors.currentCity);
  const {changeCity} = useActionCreators(appSliceActions);

  const handleNavItemClick = () => {
    changeCity(city);
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
        tabIndex={0}
        onClick={handleNavItemClick}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

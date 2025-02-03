import {useActionCreators} from '../../hooks/store';
import {appProcessActions} from '../../store/slice/app-process';
import {TCityName} from '../../types/offers';

type TCitiesNavItemProps = {
  city: TCityName;
  currentCity: TCityName;
}

export default function CitiesNavItem({city, currentCity}: TCitiesNavItemProps): JSX.Element {
  const {changeCity} = useActionCreators(appProcessActions);

  const cityClickHandler = () => {
    changeCity(city);
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
        href="#"
        onClick={cityClickHandler}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

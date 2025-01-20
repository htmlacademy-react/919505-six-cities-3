import {useAppDispatch} from '../../hooks/store';
import {changeCity} from '../../store/actions';

type TCitiesNavItemProps = {
  city: string;
  currentCity: string;
}

export default function CitiesNavItem({city, currentCity}: TCitiesNavItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
        href="#"
        onClick={() => dispatch(changeCity({city}))}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

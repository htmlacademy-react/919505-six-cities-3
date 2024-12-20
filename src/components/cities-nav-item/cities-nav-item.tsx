type CitiesNavItemProps = {
  city: string;
  currentCity: string;
}

export default function CitiesNavItem({city, currentCity}: CitiesNavItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`} href="#"> <span>{city}</span> </a>
    </li>
  );
}

type CitiesNavItemProps = {
  city: string;
}

export default function CitiesNavItem({city}: CitiesNavItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#"> <span>{city}</span> </a>
    </li>
  );
}
type TCitiesNavItemProps = {
  city: string;
  currentCity: string;
  handleCityChange: (city: string) => void;
}

export default function CitiesNavItem({city, currentCity, handleCityChange}: TCitiesNavItemProps): JSX.Element {
  const cityChangeHandler = () => {
    handleCityChange(city);
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
        href="#"
        onClick={cityChangeHandler}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

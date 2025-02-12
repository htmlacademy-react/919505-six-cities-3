import {useActionCreators} from '../../hooks/store';
import {appSliceActions} from '../../store/slices/app';
import {useNavigate} from 'react-router-dom';
import {AppRoute, Cities} from '../../const';

export default function CityLink(): JSX.Element {
  const {changeCity} = useActionCreators(appSliceActions);
  const navigate = useNavigate();

  const randomCity = Cities[Math.floor(Math.random() * Cities.length)];

  const handleCityLinkClick = () => {
    changeCity(randomCity);
    navigate(AppRoute.Root);
  };

  return (
    <a className="locations__item-link" onClick={handleCityLinkClick}> <span>{randomCity}</span> </a>
  );
}

import {useActionCreators} from '../../hooks/store';
import {appSliceActions} from '../../store/slices/app';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {TCityName} from '../../types/offers';

type TCityLinkProps = {
  city: TCityName;
}

export default function CityLink({city}: TCityLinkProps): JSX.Element {
  const {changeCity} = useActionCreators(appSliceActions);
  const navigate = useNavigate();

  const handleCityLinkClick = () => {
    changeCity(city);
    navigate(AppRoute.Root);
  };

  return (
    <a className="locations__item-link" onClick={handleCityLinkClick}> <span>{city}</span> </a>
  );
}

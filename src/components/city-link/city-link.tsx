import {useActionCreators} from '../../hooks/store';
import {appSliceActions} from '../../store/slices/app';
import {TCityName} from '../../types/offers';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type TCityLinkProps = {
  city: string;
}

export default function CityLink({city}: TCityLinkProps): JSX.Element {
  const {changeCity} = useActionCreators(appSliceActions);
  const navigate = useNavigate();

  const clickHandler = () => {
    changeCity(city as TCityName);
    navigate(AppRoute.Root);
  };

  return (
    <a className="locations__item-link" onClick={clickHandler}> <span>{city}</span> </a>
  );
}

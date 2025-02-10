import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useActionCreators} from '../../hooks/store';
import {appSliceActions} from '../../store/slices/app';
import {TCityName} from '../../types/offers';

type TCityLinkProps = {
  city: string;
}

export default function CityLink({city}: TCityLinkProps): JSX.Element {
  const {changeCity} = useActionCreators(appSliceActions);

  const clickHandler = () => {
    changeCity(city as TCityName);
  };

  return (
    <Link to={AppRoute.Root} className="locations__item-link" onClick={clickHandler}> <span>{city}</span> </Link>
  );
}

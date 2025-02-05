import {OfferCardParams} from '../../common/const';
import {TOfferPreview} from '../../types/offers';
import OfferCardList from '../offer-card-list';
import CityLink from '../city-link';

type TFavoritesItemProps = {
  city: string;
  offers: TOfferPreview[];
}

export default function FavoritesItem({city, offers}: TFavoritesItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <CityLink city={city}/>
        </div>
      </div>
      <OfferCardList offers={offers} cardType={OfferCardParams.type.favorite}/>
    </li>
  );
}

import {OfferCardParams} from '../../utils/const';
import {TOfferPreview} from '../../types/offers';
import OfferCardList from '../offer-card-list';

type TFavoritesItemProps = {
  city: string;
  offers: TOfferPreview[];
}

export default function FavoritesItem({city, offers}: TFavoritesItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#"> <span>{city}</span> </a>
        </div>
      </div>
      <OfferCardList offers={offers} cardType={OfferCardParams.type.favorite}/>
    </li>
  );
}

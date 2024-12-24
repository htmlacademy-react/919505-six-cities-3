import {OfferPreview} from '../../utils/types.ts';
import {OfferCardParams} from '../../utils/const.ts';
import OfferCardList from '../offer-card-list/offer-card-list.tsx';

type FavoritesItemProps = {
  city: string;
  offers: OfferPreview[];
}

export default function FavoritesItem({city, offers}: FavoritesItemProps): JSX.Element {
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

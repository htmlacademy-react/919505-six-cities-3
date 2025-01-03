import {OfferPreview} from '../../utils/types.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import {OfferCardParams} from '../../utils/const.ts';

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

      <div className="favorites__places">
        {offers.map((offer) => <OfferCard cardData={offer} cardType={OfferCardParams.type.favorite} key={offer.id}/>)}
      </div>
    </li>
  );
}

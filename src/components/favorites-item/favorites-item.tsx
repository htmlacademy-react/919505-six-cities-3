import {OfferPreview} from '../../common/types.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import {CardTypeParams} from '../../common/const.ts';

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
        {offers.map((offer) => <OfferCard cardData={offer} cardType={CardTypeParams.FAVORITE} key={offer.id}/>)}
      </div>
    </li>
  );
}

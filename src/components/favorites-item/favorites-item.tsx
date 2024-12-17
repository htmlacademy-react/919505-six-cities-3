import {OfferPreviewType} from '../../common/types.ts';
import PlaceCard from '../place-card/place-card.tsx';
import {CardType} from '../../common/const.ts';

type FavoritesItemProps = {
  city: string;
  offers: OfferPreviewType[];
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
        {offers.map((offer) => <PlaceCard cardData={offer} cardType={CardType.FAVORITE} key={offer.id}/>)}
      </div>
    </li>
  );
}

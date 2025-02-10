import {OFFER_DETAILS_CHECK_NUMBER} from '../../const';

type TOfferFeaturesListProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export default function OfferFeaturesList({type, bedrooms, maxAdults}: TOfferFeaturesListProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {`${bedrooms} ${bedrooms === OFFER_DETAILS_CHECK_NUMBER ? 'Bedroom' : 'Bedrooms'}`}
      </li>
      <li className="offer__feature offer__feature--adults">
        {`Max ${maxAdults} ${maxAdults === OFFER_DETAILS_CHECK_NUMBER ? 'Adult' : 'Adults'}`}
      </li>
    </ul>
  );
}

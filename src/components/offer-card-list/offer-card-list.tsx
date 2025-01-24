import {TOfferPreview} from '../../types/offers';
import {getContainerClassName} from './utils';
import OfferCard from '../offer-card';

type TOfferCardListProps = {
  offers: TOfferPreview[];
  cardType: string;
};

export default function OfferCardList({offers, cardType}: TOfferCardListProps): JSX.Element {
  const containerClassName = getContainerClassName(cardType);

  return (
    <div className={containerClassName}>
      {offers.map((offer) => <OfferCard cardData={offer} cardType={cardType} key={offer.id}/>)}
    </div>
  );
}

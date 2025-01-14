import {TOfferPreview} from '../../utils/types';
import {getContainerClassName} from './utils';
import OfferCard from '../offer-card';

type TOfferCardListProps = {
  offers: TOfferPreview[];
  cardType: string;
  handleCardHover: (cardId?: string) => void;
};

export default function OfferCardList({offers, cardType, handleCardHover}: TOfferCardListProps): JSX.Element {
  const containerClassName = getContainerClassName(cardType);

  return (
    <div className={containerClassName}>
      {offers.map((offer) => <OfferCard cardData={offer} cardType={cardType} handleCardHover={handleCardHover} key={offer.id}/>)}
    </div>
  );
}

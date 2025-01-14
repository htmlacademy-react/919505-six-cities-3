import {useState} from 'react';
import {TOfferPreview} from '../../utils/types';
import {getContainerClassName} from './utils';
import OfferCard from '../offer-card';

type TOfferCardListProps = {
  offers: TOfferPreview[];
  cardType: string;
};

export default function OfferCardList({offers, cardType}: TOfferCardListProps): JSX.Element {
  const containerClassName = getContainerClassName(cardType);

  const [currentActiveOffer, setCurrentActiveOffer] = useState('');

  return (
    <div className={containerClassName}>
      {currentActiveOffer && <span className="visually-hidden">{currentActiveOffer}</span>}
      {offers.map((offer) => <OfferCard cardData={offer} cardType={cardType} onCardActivate={setCurrentActiveOffer} key={offer.id}/>)}
    </div>
  );
}

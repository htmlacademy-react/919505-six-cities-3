import {useState} from 'react';
import {OfferPreview} from '../../utils/types';
import {getContainerClassName} from './utils';
import OfferCard from '../offer-card';

type OfferCardListProps = {
  offers: OfferPreview[];
  cardType: string;
};

export default function OfferCardList({offers, cardType}: OfferCardListProps): JSX.Element {
  const containerClassName = getContainerClassName(cardType);

  const [currentActiveOffer, setCurrentActiveOffer] = useState('');

  return (
    <div className={containerClassName}>
      {currentActiveOffer && <span className="visually-hidden">{currentActiveOffer}</span>}
      {offers.map((offer) => <OfferCard cardData={offer} cardType={cardType} onCardActivate={setCurrentActiveOffer} key={offer.id}/>)}
    </div>
  );
}

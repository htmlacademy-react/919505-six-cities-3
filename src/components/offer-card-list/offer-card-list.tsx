import {useEffect, useState} from 'react';
import {TOfferPreview} from '../../utils/types';
import {getContainerClassName} from './utils';
import OfferCard from '../offer-card';
import {Nullable} from 'vitest';

type TOfferCardListProps = {
  offers: TOfferPreview[];
  cardType: string;
};

export default function OfferCardList({offers, cardType}: TOfferCardListProps): JSX.Element {
  const containerClassName = getContainerClassName(cardType);

  const [currentActiveOffer, setCurrentActiveOffer] = useState<Nullable<string>>(null);

  useEffect(() => {
  }, [currentActiveOffer]);

  const handleCardHover = (cardId?: string) => {
    setCurrentActiveOffer(cardId || null);
  };

  return (
    <div className={containerClassName}>
      {offers.map((offer) => <OfferCard cardData={offer} cardType={cardType} handleCardHover={handleCardHover} key={offer.id}/>)}
    </div>
  );
}

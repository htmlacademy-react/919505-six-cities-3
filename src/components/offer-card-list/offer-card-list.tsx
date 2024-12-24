import OfferCard from '../offer-card/offer-card.tsx';
import {OfferPreview} from '../../utils/types.ts';
import {OfferCardParams} from '../../utils/const.ts';
import {useState} from 'react';

type OfferCardListProps = {
  offers: OfferPreview[];
  cardType: string;
};

const getContainerClassName = (cardType: string) => {
  switch (cardType) {
    case OfferCardParams.type.default:
      return 'cities__places-list places__list tabs__content';
    case OfferCardParams.type.favorite:
      return 'favorites__places';
    case OfferCardParams.type.near:
      return 'near-places__list places__list';
  }
};

export default function OfferCardList({offers, cardType}: OfferCardListProps): JSX.Element {
  const containerClassName = getContainerClassName(cardType);

  const [currentActiveOffer, setCurrentActiveOffer] = useState('');

  return (
    <div className={containerClassName}>
      {offers.map((offer) => <OfferCard cardData={offer} cardType={cardType} onCardActivate={setCurrentActiveOffer} key={offer.id}/>)}
    </div>
  );
}

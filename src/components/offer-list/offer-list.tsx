import {TCityName, TOfferPreview} from '../../types/offers';
import OffersSortingPanel from '../offers-sorting-panel';
import OfferCardList from '../offer-card-list';
import {OfferCardParams} from '../../common/const';

type TOfferListProps = {
  currentCityName: TCityName;
  offers: TOfferPreview[];
  handleCardHover: (cardId?: string) => void;
}

export default function OfferList({currentCityName, offers, handleCardHover}: TOfferListProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCityName}</b>
      <OffersSortingPanel/>
      <OfferCardList offers={offers} cardType={OfferCardParams.type.default} handleCardHover={handleCardHover}/>
    </section>
  );
}

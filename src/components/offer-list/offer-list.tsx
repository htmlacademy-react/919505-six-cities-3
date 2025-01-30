import {TOfferPreview} from '../../types/offers';
import OffersSortingPanel from '../offers-sorting-panel';
import OfferCardList from '../offer-card-list';
import {OfferCardParams} from '../../common/const';
import {useAppSelector} from '../../hooks/store';
import {appProcessSelectors} from '../../store/app-process';

type TOfferListProps = {
  offers: TOfferPreview[];
}

export default function OfferList({offers}: TOfferListProps) {
  const currentCity = useAppSelector(appProcessSelectors.currentCity);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} place{offers.length > 1 && 's'} to stay in {currentCity}</b>
      <OffersSortingPanel/>
      <OfferCardList offers={offers} cardType={OfferCardParams.type.default}/>
    </section>
  );
}

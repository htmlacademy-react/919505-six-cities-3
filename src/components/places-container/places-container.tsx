import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import {TOfferPreview} from '../../types/offers';
import {MapType} from '../../const';
import Map from '../map';

type TPlacesContainerProps = {
  offers: TOfferPreview[];
  isEmpty: boolean;
}

export default function PlacesContainer({offers, isEmpty}: TPlacesContainerProps): JSX.Element {
  return (
    <>
      {isEmpty
        ? <OfferListEmpty/>
        : <OfferList offers={offers}/>}
      <div className="cities__right-section">
        {!isEmpty && <Map offers={offers} mapType={MapType.Main}/>}
      </div>
    </>
  );
}

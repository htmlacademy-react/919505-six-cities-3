import {memo} from 'react';
import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import {MapType} from '../../const';
import Map from '../map';
import {TOfferPreview} from '../../types/offers';

type TPlacesContainerProps = {
  offers: TOfferPreview[];
  isEmpty: boolean;
}

function PlacesContainer({offers, isEmpty}: TPlacesContainerProps): JSX.Element {
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

const MemorizedPlacesContainer = memo(PlacesContainer);
export default MemorizedPlacesContainer;

import {memo} from 'react';
import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import {MapType} from '../../const';
import Map from '../map';
import {useAppSelector} from '../../hooks/store';
import {offersSliceSelectors} from '../../store/slices/offers';

type TPlacesContainerProps = {
  isEmpty: boolean;
}

function PlacesContainer({isEmpty}: TPlacesContainerProps): JSX.Element {
  const offers = useAppSelector(offersSliceSelectors.currentCitySortedOffers);

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

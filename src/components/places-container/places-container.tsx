import {memo} from 'react';
import OfferListEmpty from '../offer-list-empty';
import OfferList from '../offer-list';
import {MapType} from '../../const';
import Map from '../map';
import {TOfferPreview} from '../../types/offers';
import {useAppSelector} from '../../hooks/store';
import {appSliceSelectors} from '../../store/slices/app';

type TPlacesContainerProps = {
  offers: TOfferPreview[];
  isEmpty: boolean;
}

function PlacesContainer({offers, isEmpty}: TPlacesContainerProps): JSX.Element {
  const currentCity = useAppSelector(appSliceSelectors.currentCity);

  return (
    <>
      {isEmpty
        ? <OfferListEmpty currentCity={currentCity}/>
        : <OfferList offers={offers} currentCity={currentCity}/>}
      <div className="cities__right-section">
        {!isEmpty && <Map offers={offers} mapType={MapType.Main}/>}
      </div>
    </>
  );
}

const MemorizedPlacesContainer = memo(PlacesContainer);
export default MemorizedPlacesContainer;

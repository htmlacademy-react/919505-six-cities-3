import {memo} from 'react';
import {useAppSelector} from '../../hooks/store';
import {offersSliceSelectors} from '../../store/slices/offers';
import {RequestStatus} from '../../const';
import PlacesContainer from '../places-container';
import Spinner from '../spinner';

type TMainContainerProps = {
  isEmpty: boolean;
}

function MainContainer({isEmpty}: TMainContainerProps): JSX.Element {
  const offersStatus = useAppSelector(offersSliceSelectors.requestStatus);
  const isLoading = offersStatus === RequestStatus.Loading;

  return (
    <div className="cities">
      <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>
        {isLoading
          ? <Spinner/>
          : <PlacesContainer isEmpty={isEmpty}/>}
      </div>
    </div>
  );
}

const MemorizedMainContainer = memo(MainContainer);
export default MemorizedMainContainer;

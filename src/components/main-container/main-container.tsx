import {TOfferPreview} from '../../types/offers';
import {useAppSelector} from '../../hooks/store';
import {offersSliceSelectors} from '../../store/slices/offers';
import {RequestStatus} from '../../const';
import PlacesContainer from '../places-container';
import Spinner from '../spinner';

type TMainContainerProps = {
  offers: TOfferPreview[];
  isEmpty: boolean;
}

export default function MainContainer({offers, isEmpty}: TMainContainerProps): JSX.Element {
  const offersStatus = useAppSelector(offersSliceSelectors.requestStatus);
  const isLoading = offersStatus === RequestStatus.Loading;

  return (
    <div className="cities">
      <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>
        {isLoading
          ? <Spinner/>
          : <PlacesContainer offers={offers} isEmpty={isEmpty}/>}
      </div>
    </div>
  );
}

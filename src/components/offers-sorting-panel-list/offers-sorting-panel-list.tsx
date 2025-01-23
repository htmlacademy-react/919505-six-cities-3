import {SortingTypes} from '../../common/const';
import OffersSortingPanelItem from '../offers-sorting-panel-item';
import {useAppSelector} from '../../hooks/store';
import {getOffersSortingPanelState} from '../../store/app-process/selectors';
import {TOfferSortType} from '../../types/offers';

type TOffersSortingPanelListProps = {
  currentSortType: TOfferSortType;
}

export default function OffersSortingPanelList({currentSortType}: TOffersSortingPanelListProps): JSX.Element {
  const isOpen = useAppSelector(getOffersSortingPanelState);

  return (
    <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
      {Object.values(SortingTypes).map((value,) =>
        <OffersSortingPanelItem key={value} sortType={value} currentSortType={currentSortType}/>
      )}
    </ul>
  );
}

import {SortingType} from '../../common/const';
import OffersSortingPanelItem from '../offers-sorting-panel-item';
import {useAppSelector} from '../../hooks/store';
import {TOfferSortType} from '../../types/offers';
import {appProcessSelectors} from '../../store/app-process';

type TOffersSortingPanelListProps = {
  currentSortType: TOfferSortType;
}

export default function OffersSortingPanelList({currentSortType}: TOffersSortingPanelListProps): JSX.Element {
  const isOpen = useAppSelector(appProcessSelectors.isOffersSortingPanelOpen);

  return (
    <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
      {Object.values(SortingType).map((value,) =>
        <OffersSortingPanelItem key={value} sortType={value} currentSortType={currentSortType}/>
      )}
    </ul>
  );
}

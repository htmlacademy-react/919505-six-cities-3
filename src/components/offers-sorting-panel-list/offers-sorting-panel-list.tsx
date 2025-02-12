import {SortingType} from '../../const';
import OffersSortingPanelItem from '../offers-sorting-panel-item';
import {TOfferSortType} from '../../types/offers';

type TOffersSortingPanelListProps = {
  currentSortType: TOfferSortType;
  isOpen: boolean;
  closePanel: () => void;
}

export default function OffersSortingPanelList({currentSortType, isOpen, closePanel}: TOffersSortingPanelListProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
      {Object.values(SortingType).map((value,) =>
        <OffersSortingPanelItem key={value} sortType={value} currentSortType={currentSortType} closePanel={closePanel}/>
      )}
    </ul>
  );
}

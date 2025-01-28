import {SortingType} from '../../common/const';
import OffersSortingPanelItem from '../offers-sorting-panel-item';
import {TOfferSortType} from '../../types/offers';

type TOffersSortingPanelListProps = {
  currentSortType: TOfferSortType;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function OffersSortingPanelList({currentSortType, isOpen, setIsOpen}: TOffersSortingPanelListProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
      {Object.values(SortingType).map((value,) =>
        <OffersSortingPanelItem key={value} sortType={value} currentSortType={currentSortType} setIsOpen={setIsOpen}/>
      )}
    </ul>
  );
}

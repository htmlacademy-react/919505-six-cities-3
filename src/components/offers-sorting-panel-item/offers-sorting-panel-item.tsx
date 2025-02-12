import {TOfferSortType} from '../../types/offers';
import {useActionCreators} from '../../hooks/store';
import {appSliceActions} from '../../store/slices/app';

type TOffersSortingPanelItemProps = {
  sortType: TOfferSortType;
  currentSortType: TOfferSortType;
  closePanel: () => void;
}

export default function OffersSortingPanelItem({sortType, currentSortType, closePanel}: TOffersSortingPanelItemProps): JSX.Element {
  const {changeOffersSortType} = useActionCreators(appSliceActions);

  const handleSortTypeClick = () => {
    changeOffersSortType(sortType);
    closePanel();
  };

  return (
    <li
      className={`places__option ${sortType === currentSortType ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={handleSortTypeClick}
    >{sortType}
    </li>

  );
}

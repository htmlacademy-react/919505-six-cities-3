import {TOfferSortType} from '../../types/offers';
import {useActionCreators} from '../../hooks/store';
import {appSliceActions} from '../../store/slices/app';

type TOffersSortingPanelItemProps = {
  sortType: TOfferSortType;
  currentSortType: TOfferSortType;
  setIsOpen: (isOpen: boolean) => void;
}

export default function OffersSortingPanelItem({sortType, currentSortType, setIsOpen}: TOffersSortingPanelItemProps): JSX.Element {
  const {changeOffersSortType} = useActionCreators(appSliceActions);

  const sortTypeClickHandler = () => {
    changeOffersSortType(sortType);
    setIsOpen(false);
  };

  return (
    <li
      className={`places__option ${sortType === currentSortType ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={sortTypeClickHandler}
    >{sortType}
    </li>

  );
}

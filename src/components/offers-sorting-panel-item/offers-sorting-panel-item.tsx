import {TOfferSortType} from '../../types/offers';
import {useActionCreators} from '../../hooks/store';
import {appProcessActions} from '../../store/app-process';

type TOffersSortingPanelItemProps = {
  sortType: TOfferSortType;
  currentSortType: TOfferSortType;
  setIsOpen: (isOpen: boolean) => void;
}

export default function OffersSortingPanelItem({sortType, currentSortType, setIsOpen}: TOffersSortingPanelItemProps): JSX.Element {
  const {changeOffersSortType} = useActionCreators(appProcessActions);

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

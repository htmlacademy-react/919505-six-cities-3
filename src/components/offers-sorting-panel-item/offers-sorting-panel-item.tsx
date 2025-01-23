import {TOfferSortType} from '../../types/offers';
import {useAppDispatch} from '../../hooks/store';
import {changeCurrentOffersSortType} from '../../store/app-process/app-process';

type TOffersSortingPanelItemProps = {
  sortType: TOfferSortType;
  currentSortType: TOfferSortType;
}

export default function OffersSortingPanelItem({sortType, currentSortType}: TOffersSortingPanelItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const sortTypeClickHandler = () => {
    dispatch(changeCurrentOffersSortType({sortType}));
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

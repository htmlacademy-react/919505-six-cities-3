import OffersSortingPanelList from '../offers-sorting-panel-list';
import {TSpanClickHandler} from '../../types/event-handlers';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {toggleSortingPanel} from '../../store/app-process/app-process';
import {getCurrentOffersSortType} from '../../store/app-process/selectors';

export default function OffersSortingPanel(): JSX.Element {
  const currentSortType = useAppSelector(getCurrentOffersSortType);
  const dispatch = useAppDispatch();

  const clickHandler: TSpanClickHandler = () => {
    dispatch(toggleSortingPanel());
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={clickHandler}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <OffersSortingPanelList currentSortType={currentSortType}/>
    </form>
  );
}

import OffersSortingPanelList from '../offers-sorting-panel-list';
import {TSpanClickHandler} from '../../types/event-handlers';
import {useAppSelector} from '../../hooks/store';
import {appProcessSelectors} from '../../store/slice/app-process';
import {useState} from 'react';

export default function OffersSortingPanel(): JSX.Element {
  const currentSortType = useAppSelector(appProcessSelectors.currentOffersSortType);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickHandler: TSpanClickHandler = () => {
    setIsOpen((prevState) => !prevState);
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

      <OffersSortingPanelList currentSortType={currentSortType} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </form>
  );
}

import OffersSortingPanelList from '../offers-sorting-panel-list';
import {TSpanClickHandler} from '../../types/event-handlers';
import {useAppSelector} from '../../hooks/store';
import {appSliceSelectors} from '../../store/slices/app';
import {useState} from 'react';

export default function OffersSortingPanel(): JSX.Element {
  const currentSortType = useAppSelector(appSliceSelectors.currentOffersSortType);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePanelClick: TSpanClickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closePanel = () => {
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handlePanelClick}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <OffersSortingPanelList currentSortType={currentSortType} isOpen={isOpen} closePanel={closePanel}/>
    </form>
  );
}

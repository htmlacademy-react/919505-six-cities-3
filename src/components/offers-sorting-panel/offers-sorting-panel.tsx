import {useState} from 'react';
import OffersSortingPanelList from '../offers-sorting-panel-list';
import {TSpanClickHandler} from '../../types/event-handlers';

export default function OffersSortingPanel(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

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
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <OffersSortingPanelList isOpen={isOpen}/>
    </form>
  );
}

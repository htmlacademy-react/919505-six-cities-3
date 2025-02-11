import {memo} from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type TOfferCardTitleProps = {
  id: string;
  title: string;
  onCardClick: () => void;
};

function OfferCardTitle({id, title, onCardClick}: TOfferCardTitleProps): JSX.Element {
  return (
    <h2 className="place-card__name">
      <Link to={AppRoute.Offer + id} onClick={onCardClick}>{title}</Link>
    </h2>
  );
}

const MemorizedOfferCardTitle = memo(OfferCardTitle);
export default MemorizedOfferCardTitle;

import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, OfferCardParams} from '../../const';

type OfferCardImageProps = {
  id: string;
  previewImage: string;
  cardType: string;
  onCardClick: () => void;
};

function OfferCardImage({id, previewImage, cardType, onCardClick}: OfferCardImageProps): JSX.Element {
  return (
    <Link to={AppRoute.Offer + id} onClick={onCardClick}>
      <img
        className="place-card__image"
        src={previewImage}
        width={cardType === OfferCardParams.type.favorite ? OfferCardParams.width.little : OfferCardParams.width.big}
        height={cardType === OfferCardParams.type.favorite ? OfferCardParams.height.little : OfferCardParams.height.big}
        alt="Place image"
      />
    </Link>
  );
}

const MemorizedOfferCardImage = memo(OfferCardImage);
export default MemorizedOfferCardImage;

import {Link} from 'react-router-dom';
import {AppRoute, BookmarkButtonParams, OfferCardParams, RatingPanelType} from '../../utils/const';
import {OfferPreview} from '../../utils/types';
import {getParentBlockName} from './utils';
import ButtonBookmark from '../button-bookmark';
import RatingPanel from '../rating-panel';

type PlaceCardProps = {
  cardData: OfferPreview;
  cardType: string;
  onCardActivate: (cardId: string) => void;
};

export default function OfferCard({cardData, cardType, onCardActivate}: PlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    previewImage,
    isFavorite,
    rating,
    isPremium
  }: OfferPreview = cardData;

  const cardParentBlockName = getParentBlockName(cardType);

  const handleCardEnter = () => {
    onCardActivate(id);
  };

  const handleCardLeave = () => {
    onCardActivate('');
  };

  return (
    <article className={`${cardParentBlockName}__card place-card`} onMouseEnter={handleCardEnter} onMouseLeave={handleCardLeave}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardParentBlockName}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer + id}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === OfferCardParams.type.favorite ? OfferCardParams.width.little : OfferCardParams.width.big}
            height={cardType === OfferCardParams.type.favorite ? OfferCardParams.height.little : OfferCardParams.height.big}
            alt="Place image"
          />
        </Link>
      </div>

      <div className={`${cardType === OfferCardParams.type.favorite ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark type={BookmarkButtonParams.type.card} isActive={isFavorite}/>
        </div>
        <RatingPanel type={RatingPanelType.Card} rating={rating}/>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

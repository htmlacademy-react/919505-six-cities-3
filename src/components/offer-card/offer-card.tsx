import {Link} from 'react-router-dom';
import {AppRoute, BookmarkButtonParams, OfferCardParams, RatingPanelType} from '../../common/const';
import {TOfferPreview} from '../../types/offers';
import {getParentBlockName} from './utils';
import ButtonBookmark from '../button-bookmark';
import RatingPanel from '../rating-panel';
import {useActionCreators} from '../../hooks/store';
import {appProcessActions} from '../../store/app-process';
import {makeFirstLetterToUpperCase} from '../../common/utils';

type TPlaceCardProps = {
  cardData: TOfferPreview;
  cardType: string;
};

export default function OfferCard({cardData, cardType}: TPlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    previewImage,
    isFavorite,
    rating,
    isPremium
  }: TOfferPreview = cardData;

  const {changeActiveOfferId} = useActionCreators(appProcessActions);

  const cardParentBlockName = getParentBlockName(cardType);

  const mouseEnterHandler = () => {
    if (cardType === OfferCardParams.type.default) {
      changeActiveOfferId(id);
    }
  };

  const mouseLeaveHandler = () => {
    if (cardType === OfferCardParams.type.default) {
      changeActiveOfferId(null);
    }
  };

  const cardClickHandler = () => {
    if (cardType === OfferCardParams.type.default) {
      changeActiveOfferId(id);
    }
  };

  return (
    <article className={`${cardParentBlockName}__card place-card`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardParentBlockName}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer + id} onClick={cardClickHandler}>
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
          <Link to={AppRoute.Offer + id} onClick={cardClickHandler}>{title}</Link>
        </h2>
        <p className="place-card__type">{makeFirstLetterToUpperCase(type)}</p>
      </div>
    </article>
  );
}

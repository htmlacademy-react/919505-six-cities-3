import {memo, useCallback} from 'react';
import {BookmarkButton, OfferCardParams, RatingPanelType} from '../../const';
import {TOfferPreview} from '../../types/offers';
import {getParentBlockName} from './utils';
import ButtonBookmark from '../button-bookmark';
import RatingPanel from '../rating-panel';
import {useActionCreators} from '../../hooks/store';
import {appSliceActions} from '../../store/slices/app';
import {makeFirstLetterToUpperCase} from '../../utils';
import OfferCardImage from '../offer-card-image';
import OfferCardTitle from '../offer-card-title';

type TPlaceCardProps = {
  cardData: TOfferPreview;
  cardType: string;
};

function OfferCard({cardData, cardType}: TPlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    previewImage,
    rating,
    isPremium
  }: TOfferPreview = cardData;

  const {changeActiveOfferId} = useActionCreators(appSliceActions);

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

  const cardClickHandler = useCallback(() => {
    if (cardType === OfferCardParams.type.default) {
      changeActiveOfferId(null);
    }
  }, [cardType, changeActiveOfferId]);

  return (
    <article className={`${cardParentBlockName}__card place-card`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardParentBlockName}__image-wrapper place-card__image-wrapper`}>
        <OfferCardImage id={id} previewImage={previewImage} cardType={cardType} onCardClick={cardClickHandler}/>
      </div>

      <div className={`${cardType === OfferCardParams.type.favorite ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark offerId={id} type={BookmarkButton.Card}/>
        </div>
        <RatingPanel type={RatingPanelType.Card} rating={rating}/>
        <OfferCardTitle id={id} title={title} onCardClick={cardClickHandler}/>
        <p className="place-card__type">{makeFirstLetterToUpperCase(type)}</p>
      </div>
    </article>
  );
}

const MemorizedOfferCard = memo(OfferCard);
export default MemorizedOfferCard;

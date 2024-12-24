import {BookmarkButtonParams, OfferCardParams, RatingPanelType} from '../../utils/const.ts';
import {OfferPreview} from '../../utils/types.ts';
import ButtonBookmark from '../button-bookmark/button-bookmark.tsx';
import RatingPanel from '../rating-panel/rating-panel.tsx';

type PlaceCardProps = {
  cardData: OfferPreview;
  cardType: string;
};

function getParentBlockName(cardType: string) {
  switch (cardType) {
    case OfferCardParams.type.default:
      return 'cities';

    case OfferCardParams.type.near:
      return 'near-places';

    case OfferCardParams.type.favorite:
      return 'favorites';
  }
}

export default function OfferCard({cardData, cardType}: PlaceCardProps): JSX.Element {
  const {
    title,
    type,
    price,
    previewImage,
    isFavorite,
    rating,
    isPremium
  }: OfferPreview = cardData;

  const cardParentBlockName = getParentBlockName(cardType);

  return (
    <article className={`${cardParentBlockName}__card place-card`}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardParentBlockName}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === OfferCardParams.type.favorite ? OfferCardParams.width.little : OfferCardParams.width.big}
            height={cardType === OfferCardParams.type.favorite ? OfferCardParams.height.little : OfferCardParams.height.big}
            alt="Place image"
          />
        </a>
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

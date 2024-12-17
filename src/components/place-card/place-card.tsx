import {CardType} from '../../common/const.ts';
import {OfferPreviewType} from '../../common/types.ts';
import {calculateRatingWidth} from '../../common/utils.ts';

type PlaceCardProps = {
  cardData: OfferPreviewType;
  cardType: string;
};

function getParentBlockName(cardType: string) {
  switch (cardType) {
    case CardType.DEFAULT:
      return 'cities';

    case CardType.NEAR:
      return 'near-places';

    case CardType.FAVORITE:
      return 'favorites';
  }
}

export default function PlaceCard({cardData, cardType}: PlaceCardProps): JSX.Element {
  const {
    title,
    type,
    price,
    previewImage,
    isFavorite,
    rating,
    isPremium
  }: OfferPreviewType = cardData;

  const cardParentBlockName = getParentBlockName(cardType);

  return (
    <article className={`${cardParentBlockName}__card place-card`}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardParentBlockName}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={cardType === CardType.FAVORITE ? '150' : '260'} height={cardType === CardType.FAVORITE ? '110' : '200'} alt="Place image"/>
        </a>
      </div>

      <div className={`${cardType === CardType.FAVORITE ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calculateRatingWidth(rating)}%`}}></span> <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
import {Review} from '../../common/types.ts';
import RatingPanel from '../rating-panel/rating-panel.tsx';
import {RatingPanelType} from '../../common/const.ts';

type OfferReviewsItemProps = {
  review: Review;
}

export default function OfferReviewsItem({review}: OfferReviewsItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>

      <div className="reviews__info">
        <RatingPanel type={RatingPanelType.REVIEWS} rating={review.rating}/>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

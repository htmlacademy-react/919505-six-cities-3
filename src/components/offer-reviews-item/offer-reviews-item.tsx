import dayjs from 'dayjs';
import {REVIEW_DATE_FORMAT, RatingPanelType} from '../../utils/const';
import {TReview} from '../../types/reviews';
import RatingPanel from '../rating-panel';

type TOfferReviewsItemProps = {
  review: TReview;
}

export default function OfferReviewsItem({review}: TOfferReviewsItemProps): JSX.Element {
  const {user, rating, comment, date} = review;
  const reviewDate = dayjs(review.date).format(REVIEW_DATE_FORMAT);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>

      <div className="reviews__info">
        <RatingPanel type={RatingPanelType.Reviews} rating={rating}/>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{reviewDate}</time>
      </div>
    </li>
  );
}

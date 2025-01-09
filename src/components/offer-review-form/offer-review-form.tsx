import {RatingInputTitles, ReviewLength} from '../../utils/const';
import RatingInput from '../rating-input';
import {useReviewForm} from '../../hooks/use-review-form';

export default function OfferReviewForm(): JSX.Element {
  const {
    comment,
    rating,
    isFormValid,
    handleRatingChange,
    handleCommentChange
  } = useReviewForm();

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingInputTitles.map((title, i) => (
          <RatingInput
            key={title}
            value={(RatingInputTitles.length - i).toString()}
            rating={rating}
            title={title}
            onRatingChange={handleRatingChange}
          />)
        )}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={ReviewLength.MIN}
        maxLength={ReviewLength.MAX}
        onChange={handleCommentChange}
        value={comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
}

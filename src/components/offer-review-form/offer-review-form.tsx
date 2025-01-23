import {RatingInputTitles, ReviewLength} from '../../utils/const';
import {TFormChangeHandler} from '../../types/event-handlers';
import {TReviewFormData} from '../../types/reviews';
import RatingInput from '../rating-input';
import useForm from '../../hooks/use-form';

export default function OfferReviewForm(): JSX.Element {
  const {
    formData,
    handleFormChange,
  } = useForm<TReviewFormData>({rating: 0, review: ''});

  const isSubmitButtonDisabled = formData.rating === 0 || formData.review.length < ReviewLength.MIN;

  const reviewChangeHandler: TFormChangeHandler = (evt) => {
    handleFormChange(evt);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingInputTitles.map((title, i) => (
          <RatingInput
            key={title}
            value={(RatingInputTitles.length - i).toString()}
            rating={formData.rating.toString()}
            title={title}
            onRatingChange={reviewChangeHandler}
          />)
        )}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={ReviewLength.MAX}
        onChange={reviewChangeHandler}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>and describe your stay with at least <b className="reviews__text-amount">{ReviewLength.MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled}>Submit</button>
      </div>
    </form>
  );
}

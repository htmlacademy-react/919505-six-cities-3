import {RatingInputTitles, RequestStatus, ReviewLength} from '../../const';
import {TFormChangeHandler} from '../../types/event-handlers';
import {TReviewFormData} from '../../types/reviews';
import RatingInput from '../rating-input';
import useForm from '../../hooks/use-form';
import {FormEvent, useEffect} from 'react';
import {TLoginForm} from '../../types/login';
import {useActionCreators, useAppSelector} from '../../hooks/store';
import {reviewsSliceActions, reviewsSliceSelectors} from '../../store/slices/reviews';
import {useParams} from 'react-router-dom';

export default function OfferReviewForm(): JSX.Element {
  const [handleFormChange, formData, setFormData] = useForm<TReviewFormData>({rating: 0, review: ''});
  const requestStatus = useAppSelector(reviewsSliceSelectors.requestStatus);
  const {postReview} = useActionCreators(reviewsSliceActions);
  const {id} = useParams();

  const isSubmitButtonDisabled =
    formData.rating === 0 || formData.review.length < ReviewLength.MIN || formData.review.length > ReviewLength.MAX;

  const isFormBlocked = requestStatus === RequestStatus.Loading;

  const reviewChangeHandler: TFormChangeHandler = (evt) => {
    handleFormChange(evt);
  };

  const submitHandler = (evt: FormEvent<TLoginForm>) => {
    evt.preventDefault();
    if (id) {
      postReview({body: {rating: Number(formData.rating), comment: formData.review}, offerId: id});
    }
  };

  useEffect(() => {
    if (requestStatus === RequestStatus.Success) {
      setFormData({rating: 0, review: ''});
    }
  }, [requestStatus, setFormData]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingInputTitles.map((title, i) => (
          <RatingInput
            key={title}
            value={(RatingInputTitles.length - i).toString()}
            rating={formData.rating.toString()}
            title={title}
            onRatingChange={reviewChangeHandler}
            isDisabled={isFormBlocked}
          />)
        )}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={reviewChangeHandler}
        value={formData.review}
        disabled={isFormBlocked}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>and describe your stay with at least <b className="reviews__text-amount">{ReviewLength.MIN} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled || isFormBlocked}>Submit</button>
      </div>
    </form>
  );
}

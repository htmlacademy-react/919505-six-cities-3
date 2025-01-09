import {ChangeEvent, useEffect, useState} from 'react';
import {RatingInputTitles, ReviewLength} from '../../utils/const';
import RatingInput from '../rating-input';

export default function OfferReviewForm(): JSX.Element {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState({value: '', isValid: false});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if(comment.isValid && rating) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [comment, rating]);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = evt.target.value;
    const isCommentValid = newValue.length >= ReviewLength.MIN && newValue.length <= ReviewLength.MAX;
    setComment({value: newValue, isValid: isCommentValid});
  };

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
        minLength={50}
        maxLength={300}
        onChange={handleCommentChange}
        value={comment.value}
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

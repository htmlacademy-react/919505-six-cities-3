import {TInputChangeHandler} from '../../types/event-handlers';

type TRatingInputProps = {
  value: string;
  rating: string;
  title: string;
  onRatingChange: TInputChangeHandler;
  isDisabled: boolean;
}

export default function RatingInput({value, rating, title, onRatingChange, isDisabled}: TRatingInputProps): JSX.Element {
  const handleRatingChange: TInputChangeHandler = (evt) => {
    onRatingChange(evt);
  };

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={rating === value}
        onChange={handleRatingChange}
        disabled={isDisabled}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

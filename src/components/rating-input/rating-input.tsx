import {TInputChangeHandler} from '../../utils/types';

type TRatingInputProps = {
  value: string;
  rating: string;
  title: string;
  onRatingChange: TInputChangeHandler;
}

export default function RatingInput({value, rating, title, onRatingChange}: TRatingInputProps): JSX.Element {
  const ratingChangeHandler: TInputChangeHandler = (evt) => {
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
        onChange={ratingChangeHandler}
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

import {ChangeEvent} from 'react';

type TRatingInputProps = {
  value: string;
  rating: string;
  title: string;
  onRatingChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export default function RatingInput({value, rating, title, onRatingChange}: TRatingInputProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={rating === value}
        onChange={onRatingChange}
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

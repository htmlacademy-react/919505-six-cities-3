import {useState} from 'react';
import {TReviewChangeHandler} from '../utils/types';
import {ReviewLength} from '../utils/const';

export default function useReviewForm() {
  const [review, setReview] = useState({rating: 0, review: ''});
  const isSubmitButtonDisabled = review.rating === 0 || review.review.length <= ReviewLength.MIN;

  const handleReviewChange: TReviewChangeHandler = (evt) => {
    const {name, value} = evt.target;
    setReview({...review, [name]: value});
  };

  return {review, isSubmitButtonDisabled, handleReviewChange};
}

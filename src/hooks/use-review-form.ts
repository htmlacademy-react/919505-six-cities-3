import {useEffect, useState} from 'react';
import {TReviewChangeHandler} from '../utils/types';
import {ReviewLength} from '../utils/const';

export default function useReviewForm() {
  const [review, setReview] = useState({rating: 0, review: ''});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const commentLength = review.review.length;
    const isReviewValid = commentLength >= ReviewLength.MIN && commentLength <= ReviewLength.MAX;

    if(isReviewValid && review.rating) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [review]);

  const handleReviewChange: TReviewChangeHandler = (evt) => {
    const {name, value} = evt.target;
    setReview({...review, [name]: value});
  };

  return {review, isFormValid, handleReviewChange};
}

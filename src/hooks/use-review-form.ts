import {ChangeEventHandler, useEffect, useState} from 'react';
import {ReviewLength} from '../utils/const';

export function useReviewForm() {
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

  const handleRatingChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setRating(evt.target.value);
  };

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    const newValue = evt.target.value;
    const isCommentValid = newValue.length >= ReviewLength.MIN && newValue.length <= ReviewLength.MAX;
    setComment({value: newValue, isValid: isCommentValid});
  };

  return {comment: comment.value, rating, isFormValid, handleRatingChange, handleCommentChange};
}

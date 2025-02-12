import {TUser} from './user';

export type TReviewFormData = {
  review: string;
  rating: number;
}

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
};

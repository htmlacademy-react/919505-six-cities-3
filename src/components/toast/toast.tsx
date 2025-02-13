import {ToastContainer} from 'react-toastify';
import useToast from '../../hooks/use-toast';
import {useAppSelector} from '../../hooks/store';
import {offersSliceSelectors} from '../../store/slices/offers';
import {ToastMessage} from '../../const';
import {reviewsSliceSelectors} from '../../store/slices/reviews';
import {userSliceSelectors} from '../../store/slices/user';

export default function Toast(): JSX.Element {
  const changeFavoriteOffersRequestStatus = useAppSelector(offersSliceSelectors.changeFavoriteOffersRequestStatus);
  const offersRequestStatus = useAppSelector(offersSliceSelectors.offersRequestStatus);
  const favoriteOffersRequestStatus = useAppSelector(offersSliceSelectors.favoriteOffersRequestStatus);
  const offerRequestStatus = useAppSelector(offersSliceSelectors.offerRequestStatus);
  const nearbyOffersRequestStatus = useAppSelector(offersSliceSelectors.nearbyOffersRequestStatus);

  const fetchReviewsRequestStatus = useAppSelector(reviewsSliceSelectors.fetchReviewsRequestStatus);
  const postReviewRequestStatus = useAppSelector(reviewsSliceSelectors.postReviewRequestStatus);

  const userRequestStatus = useAppSelector(userSliceSelectors.userRequestStatus);


  useToast(changeFavoriteOffersRequestStatus, ToastMessage.FavoriteDidNotUpdate);
  useToast(offersRequestStatus, ToastMessage.NoOffers);
  useToast(favoriteOffersRequestStatus, ToastMessage.NoFavoriteOffers);
  useToast(offerRequestStatus, ToastMessage.NoOffer);
  useToast(nearbyOffersRequestStatus, ToastMessage.NoNearbyOffers);

  useToast(fetchReviewsRequestStatus, ToastMessage.NoReviews);
  useToast(postReviewRequestStatus, ToastMessage.DidNotPostReview);

  useToast(userRequestStatus, ToastMessage.DidNotAuthorize);
  return (
    <ToastContainer/>
  );
}

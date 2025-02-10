import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {useActionCreators, useAppSelector} from '../../hooks/store';
import {offersSliceActions, offersSliceSelectors} from '../../store/slices/offers';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {MAX_NEARBY_OFFERS, RequestStatus} from '../../const';
import Spinner from '../../components/spinner';
import NotFoundScreen from '../not-found-screen';
import {reviewsSliceActions} from '../../store/slices/reviews';

export default function OfferScreen(): JSX.Element {
  const offer = useAppSelector(offersSliceSelectors.offer);
  const offerRequestStatus = useAppSelector(offersSliceSelectors.requestStatus);
  const nearbyOffers = useAppSelector(offersSliceSelectors.nearbyOffers);

  const {fetchOffer, fetchNearbyOffers} = useActionCreators(offersSliceActions);
  const {fetchReviews} = useActionCreators(reviewsSliceActions);
  const {id} = useParams();

  const slicedNearbyOffers = nearbyOffers.filter((item) => item.id !== id)
    .slice(0, MAX_NEARBY_OFFERS);

  useEffect(() => {
    Promise.all([fetchOffer(id as string), fetchNearbyOffers(id as string), fetchReviews(id as string)]);
  }, [id, fetchOffer, fetchNearbyOffers, fetchReviews]);

  if (offerRequestStatus === RequestStatus.Loading) {
    return <Spinner/>;
  }

  if (offerRequestStatus === RequestStatus.Failed || !offer) {
    return <NotFoundScreen/>;
  }

  return (
    <main className="page__main page__main--offer">
      <OfferDetails offer={offer} nearbyOffers={slicedNearbyOffers}/>
      <OfferNearPlaces nearbyOffers={slicedNearbyOffers}/>
    </main>
  );
}

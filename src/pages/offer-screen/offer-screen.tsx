import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {useActionCreators, useAppSelector} from '../../hooks/store';
import {offersSliceActions, offersSliceSelectors} from '../../store/slices/offers';
import {AppRoute, MAX_NEARBY_OFFERS, RequestStatus} from '../../const';
import Spinner from '../../components/spinner';
import {reviewsSliceActions} from '../../store/slices/reviews';

export default function OfferScreen(): JSX.Element {
  const offer = useAppSelector(offersSliceSelectors.offer);
  const offerRequestStatus = useAppSelector(offersSliceSelectors.offerRequestStatus);
  const nearbyOffers = useAppSelector(offersSliceSelectors.nearbyOffers);

  const {fetchOffer, fetchNearbyOffers} = useActionCreators(offersSliceActions);
  const {fetchReviews} = useActionCreators(reviewsSliceActions);
  const {id} = useParams();
  const navigate = useNavigate();

  const slicedNearbyOffers = nearbyOffers.filter((item) => item.id !== id)
    .slice(0, MAX_NEARBY_OFFERS);

  useEffect(() => {
    if (typeof id === 'string') {
      Promise.all([fetchOffer(id), fetchNearbyOffers(id), fetchReviews(id)]);
    }
  }, [id, fetchOffer, fetchNearbyOffers, fetchReviews]);

  useEffect(() => {
    if (offerRequestStatus === RequestStatus.Failed) {
      navigate(AppRoute.NotFound);
    }
  }, [offerRequestStatus, navigate]);

  if (offerRequestStatus === RequestStatus.Loading) {
    return <Spinner/>;
  }

  return (
    <main className="page__main page__main--offer">
      {offer && <OfferDetails offer={offer} nearbyOffers={slicedNearbyOffers}/>}
      <OfferNearPlaces nearbyOffers={slicedNearbyOffers}/>
    </main>
  );
}

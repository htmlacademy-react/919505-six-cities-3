import OfferNearPlaces from '../../components/offer-near-places';
import OfferDetails from '../../components/offer-details';
import {offer} from '../../mocks/offer';
import {useActionCreators, useAppSelector} from '../../hooks/store';
import {MAX_NEARBY_OFFERS} from '../../common/const';
import {appProcessActions, appProcessSelectors} from '../../store/app-process';
import {appDataSelectors} from '../../store/app-data';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function OfferScreen(): JSX.Element {
  const activeOfferId = useAppSelector(appProcessSelectors.activeOfferId);
  const currentCity = useAppSelector(appProcessSelectors.currentCity);
  const offers = useAppSelector(appDataSelectors.currentCitySortedOffers);
  const {changeActiveOfferId} = useActionCreators(appProcessActions);

  const currentPage = useLocation().pathname;

  // Если на страницу зашли по прямой ссылке, минуя главную, то добавляем в стор ID текущей карточки
  useEffect(() => {
    if (!activeOfferId) {
      const offerId = currentPage.substring(currentPage.lastIndexOf('/') + 1, currentPage.length);
      changeActiveOfferId(offerId);
    }
  }, [currentPage, changeActiveOfferId, activeOfferId]);

  const nearOffers = offers.filter((item) =>
    item.city.name === currentCity && item.id !== activeOfferId)
    .slice(0, MAX_NEARBY_OFFERS);

  return (
    <main className="page__main page__main--offer">
      <OfferDetails
        offer={offer}
        nearOffers={nearOffers}
      />
      <div className="container">
        <OfferNearPlaces nearOffers={nearOffers}/>
      </div>
    </main>
  );
}

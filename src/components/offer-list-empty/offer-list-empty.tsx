import {useAppSelector} from '../../hooks/store';
import {appSliceSelectors} from '../../store/slices/app';

export default function OfferListEmpty(): JSX.Element {
  const currentCity = useAppSelector(appSliceSelectors.currentCity);

  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
      </div>
    </section>
  );
}

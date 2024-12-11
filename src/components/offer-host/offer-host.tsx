import OfferDescription from '../offer-description/offer-description';

export default function OfferHost(): JSX.Element {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">Angelina</span> <span className="offer__user-status">Pro</span>
      </div>

      <OfferDescription/>
    </div>
  );
}

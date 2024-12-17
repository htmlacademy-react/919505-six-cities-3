import OfferDescription from '../offer-description/offer-description';
import {UserType} from '../../common/types.ts';

type OfferHostProps = {
  host: UserType;
  description: string;
};

export default function OfferHost({host, description}: OfferHostProps): JSX.Element {
  const {name, avatarUrl, isPro}: UserType = host;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="offer__user-name">{name}</span>
        {isPro && <span className="offer__user-status">Pro</span>}
      </div>

      <OfferDescription description={description}/>
    </div>
  );
}

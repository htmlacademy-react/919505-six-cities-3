import {TUser} from '../../utils/types';
import OfferDescription from '../offer-description';

type TOfferHostProps = {
  host: TUser;
  description: string;
};

export default function OfferHost({host, description}: TOfferHostProps): JSX.Element {
  const {name, avatarUrl, isPro}: TUser = host;

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

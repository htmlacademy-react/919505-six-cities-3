import OfferInsideItem from '../offer-inside-item';

type TOfferInsideListProps = {
  goods: string[];
}

export default function OfferInsideList({goods}: TOfferInsideListProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((feature) => <OfferInsideItem feature={feature} key={feature}/>)}
      </ul>
    </div>
  );
}

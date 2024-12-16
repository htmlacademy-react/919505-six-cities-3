import OfferInsideItem from '../offer-inside-item/offer-inside-item';

type OfferInsideListProps = {
  goods: string[];
}

export default function OfferInsideList({goods}: OfferInsideListProps): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {goods.map((feature) => <OfferInsideItem feature={feature} key={feature}/>)}
    </ul>
  );
}

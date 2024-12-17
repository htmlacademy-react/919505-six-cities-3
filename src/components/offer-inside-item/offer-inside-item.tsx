type OfferInsideItemProps = {
  feature: string;
}

export default function OfferInsideItem({feature}: OfferInsideItemProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {feature}
    </li>
  );
}

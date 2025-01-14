type TOfferInsideItemProps = {
  feature: string;
}

export default function OfferInsideItem({feature}: TOfferInsideItemProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {feature}
    </li>
  );
}

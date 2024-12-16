type OfferDescriptionProps = {
  description: string;
}

export default function OfferDescription({description}: OfferDescriptionProps): JSX.Element {
  return (
    <div className="offer__description">
      <p className="offer__text">
        {description}
      </p>
    </div>
  );
}

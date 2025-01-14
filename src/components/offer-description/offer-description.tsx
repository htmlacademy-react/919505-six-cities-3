type TOfferDescriptionProps = {
  description: string;
}

export default function OfferDescription({description}: TOfferDescriptionProps): JSX.Element {
  return (
    <div className="offer__description">
      <p className="offer__text">
        {description}
      </p>
    </div>
  );
}

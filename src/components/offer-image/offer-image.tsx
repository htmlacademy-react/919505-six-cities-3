type TOfferImageProps = {
  image: string;
  offerType: string;
}

export default function OfferImage({image, offerType}: TOfferImageProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt={`Photo ${offerType}`}/>
    </div>
  );
}

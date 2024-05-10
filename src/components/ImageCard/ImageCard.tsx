import { FC } from "react";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.description}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;

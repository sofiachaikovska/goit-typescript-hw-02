import { ImageData } from "../ImageCard/ImageCard.types";

export interface ImageGalleryProps {
  images: ImageData[];
  onImageClick: (image: ImageData) => void;
}

import { ImageData } from "../ImageCard/ImageCard.types";

export interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
}

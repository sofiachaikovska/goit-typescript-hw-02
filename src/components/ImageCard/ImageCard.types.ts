export interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  total_pages: number;
}

export interface ImageCardProps {
  image: ImageData;
  onClick: (image: ImageData) => void;
}

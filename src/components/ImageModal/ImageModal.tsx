import css from "./ImageModal.module.css";
import { FC } from "react";
import Modal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      contentLabel="Image Modal"
    >
      <div onClick={handleOverlayClick}>
        <img
          src={image.urls.regular}
          alt={image.description || "Image"}
          className={css.imageFull}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;

import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { requestImagesByQuery } from "./components/services/api";
import { ImageData } from "./components/ImageCard/ImageCard.types";

function App() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalImage, setModalImage] = useState<ImageData | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImagesByQuery = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const data = await requestImagesByQuery(query, page);
        setImages((prev: ImageData[]) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesByQuery();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm: string) => {
    setQuery(searchTerm);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const openModal = (image: ImageData) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={openModal} />
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
      {page < totalPages && <LoadMoreBtn onClick={loadMore} />}
    </>
  );
}

export default App;

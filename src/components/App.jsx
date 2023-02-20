import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { requestImg } from 'services/api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [totalImg, setTotalImg] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [per_page, setPer_page] = useState(12);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      try {
        const response = await requestImg(query, page, per_page);
        setImages(prevImages => [...prevImages, ...response.hits]);
        setTotalImg(response.totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page, per_page]);

  const handleSubmit = name => {
    setQuery(name);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images}></ImageGallery>
      {images.length > 0 && page < Math.ceil(totalImg / per_page) && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
};

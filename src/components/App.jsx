import React, { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import apiService from 'services/apiService';
import { Loader } from './Loader/Loader';
import { ButtonLoad } from './Button/Button';
import { Modal } from './Modal/Modal';

export function App() {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  useEffect(() => {
    if (searchName === '') {
      return;
    }
    setLoading(true);

    apiService(searchName, page)
      .then(data => {
        setImages(prevState => [...prevState, ...data.hits]);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [searchName, page]);

  const toggleShowModal = () => {
    setShowModal(!showModal);
    setLargeImage(null);
  };

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    setImages([]);
  };
  const handleButtonLoad = () => {
    setPage(prevState => prevState + 1);
  };
  const showButtonLoad = () => {
    return images.length !== 0 && page * 12 <= images.length;
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {images.length !== 0 && (
        <ImageGallery images={images} onClick={setLargeImage} />
      )}
      {showButtonLoad() && <ButtonLoad onClick={handleButtonLoad} />}
      {largeImage && (
        <Modal onClick={toggleShowModal}>
          <img src={largeImage} alt={searchName} />
        </Modal>
      )}
      <Loader visible={loading} />
      <ToastContainer autoClose={3000} />
    </>
  );
}

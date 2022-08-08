import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ images, onClick }) {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </Gallery>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

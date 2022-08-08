import React from 'react';
import PropTypes from 'prop-types';
import { Gallery, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ src, largeImageURL, onClick }) {
  return (
    <Gallery>
      <Image src={src} alt="" onClick={() => onClick(largeImageURL)} />
    </Gallery>
  );
}
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

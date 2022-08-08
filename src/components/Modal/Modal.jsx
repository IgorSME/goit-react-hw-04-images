import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalImage, Overlay } from './Modal.styled';

export function Modal({ onClick, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
  });

  const handleEscClick = e => {
    if (e.code === 'Escape') {
      onClick();
    }
  };
  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalImage>{children}</ModalImage>
    </Overlay>
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

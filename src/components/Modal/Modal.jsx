import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalImage, Overlay } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmountt() {
    window.removeEventListener('keydown', this.handleEscClick);
  }
  handleEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };
  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalImage>{this.props.children}</ModalImage>
      </Overlay>
    );
  }
}

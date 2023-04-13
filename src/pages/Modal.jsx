import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Modall } from './modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImageURL }) {
  const onKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onKeydown]);

  const onClikOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onClikOverlay}>
      <Modall>
        <img src={largeImageURL} alt="img" />
      </Modall>
    </Backdrop>,
    modalRoot
  );
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

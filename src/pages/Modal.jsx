import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import { LoginPage } from './LoginPage';
import { Backdrop, Modall } from './modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose }) {
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
        <LoginPage />
      </Modall>
    </Backdrop>,
    modalRoot
  );
}

export default Modal;

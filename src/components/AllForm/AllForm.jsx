import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from 'redux/auth/auth.operetions';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { Modal } from 'components/Modal/Modal';

function AllForm() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const credential = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(authOperations.logIn(credential));
  }

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div onSubmit={handleSubmit} autoComplete="on">
      {/* <LoginPage />
      <RegisterPage /> */}
      <button type="submit" disabled={modal} style={{ marginBottom: '15px' }}>
        Log In
        {/* <InputIcon sx={{ marginLeft: '5px' }} /> */}
      </button>
      <button type="button" onClick={() => setModal(true)} disabled={modal}>
        Forgot password?
      </button>
      <Modal isOpened={modal} isCloseModal={closeModal}>
        <LoginPage />
        <RegisterPage />
        {/* <ChangePasswordForm isCloseModal={closeModal} /> */}
      </Modal>
    </div>
  );
}
export default AllForm;

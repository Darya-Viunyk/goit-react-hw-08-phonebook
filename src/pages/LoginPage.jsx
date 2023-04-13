import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from 'redux/auth/auth.operetions';
import Modal from 'pages/Modal';
function LoginPage() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(prevState => !prevState);
  };
  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Email
                <input type="text" name="email" />
              </label>
            </div>
            <div>
              <label>
                Password
                <input type="password" name="password" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Modal>
      )}
    </>
  );
}
export default LoginPage;

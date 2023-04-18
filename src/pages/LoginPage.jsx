import React from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth.operetions';

function LoginPage() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const credential = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(authOperations.logIn(credential));
  }

  return (
    <>
      <div>
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
      </div>
    </>
  );
}
export default LoginPage;

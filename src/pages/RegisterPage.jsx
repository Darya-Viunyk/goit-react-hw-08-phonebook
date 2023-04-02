import React from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth.operetions';
import { Outlet } from 'react-router-dom';

export default function RegisterPage() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const credential = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(authOperations.register(credential));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            NickName
            <input type="text" name="name" />
          </label>
        </div>
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
      <Outlet />
    </>
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth.operetions';
import { Label, NameLabel, Button, Conteiner, Inpyt } from './loginpage.styled';

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
      <Conteiner>
        <form onSubmit={handleSubmit}>
          <div>
            <Label>
              <NameLabel> Email</NameLabel>

              <Inpyt type="text" name="email" />
            </Label>
          </div>
          <div>
            <Label>
              <NameLabel>Password</NameLabel>
              <Inpyt type="password" name="password" />
            </Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Conteiner>
    </>
  );
}
export default LoginPage;

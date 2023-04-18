import React from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth.operetions';
import {
  Label,
  NameLabel,
  Button,
  Conteiner,
  Inpyt,
} from './registerpage.styled';
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
    <Conteiner>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>
            <NameLabel>NickName</NameLabel>

            <Inpyt type="text" name="name" />
          </Label>
        </div>
        <div>
          <Label>
            <NameLabel>Email</NameLabel>

            <Inpyt type="text" name="email" />
          </Label>
        </div>
        <div>
          <Label>
            <NameLabel> Password</NameLabel>

            <Inpyt type="password" name="password" />
          </Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Conteiner>
  );
}

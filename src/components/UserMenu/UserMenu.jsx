import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth.operetions';
import { userEmailSelector } from 'redux/tasks/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(userEmailSelector);
  return (
    <div>
      <p>{userEmail}</p>
      <button
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
}

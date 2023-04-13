import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth.operetions';
import { userEmailSelector } from 'redux/tasks/selectors';
import { Button, Text, Box } from './usemenu.styled';
function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(userEmailSelector);
  return (
    <>
      <Text>{userEmail}</Text>
      <Box>
        <Button
          onClick={() => {
            dispatch(authOperations.logOut());
          }}
        >
          Logout
        </Button>
      </Box>
    </>
  );
}
export default UserMenu;

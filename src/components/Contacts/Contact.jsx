import { Button, ItemLi } from './contact.styled';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/tasks/phoneBook.operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ItemLi key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </ItemLi>
    </>
  );
};
export default Contact;

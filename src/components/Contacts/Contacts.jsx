import { Contact } from './Contact';
import { filtredContactsSelector } from 'redux/tasks/selectors';
import { ListStyle } from './contacts.styled';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  // const contacts = useSelector(state => state.items);
  // const input = useSelector(state => state.filter);
  const filteredContacts = useSelector(filtredContactsSelector);

  return (
    <>
      <ListStyle>
        {filteredContacts.map(({ name, id, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </ListStyle>
    </>
  );
};

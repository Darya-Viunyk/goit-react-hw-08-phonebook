import Contact from './Contact';
import { filtredContactsSelector } from 'redux/tasks/selectors';
import { ListStyle } from './contacts.styled';
import { useSelector } from 'react-redux';

const Contacts = () => {
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
export default Contacts;

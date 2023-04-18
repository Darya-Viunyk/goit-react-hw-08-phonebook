import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchContacts } from 'redux/tasks/phoneBook.operations';
import { filtredContactsSelector } from 'redux/tasks/selectors';
import React from 'react';
import FormContacts from 'components/FormContacts/FormContacts';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { Header, Conteiner } from './contactspage.styled';

function ContactsPage() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(filtredContactsSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Conteiner>
        <div>
          <Header>Phone Book </Header>
          <FormContacts />
        </div>
        <div>
          <Header>Contacts</Header>
          <Filter />
          {filteredContacts && <Contacts contacts={filteredContacts} />}
        </div>
        <Outlet />
      </Conteiner>
    </>
  );
}
export default ContactsPage;

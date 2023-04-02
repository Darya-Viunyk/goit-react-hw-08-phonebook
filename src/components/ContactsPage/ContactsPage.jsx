import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormContacts } from 'components/FormContacts/FormContacts';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'pages/Contacts';

import { fetchContacts } from 'redux/tasks/phoneBook.operations';
import { filtredContactsSelector } from 'redux/tasks/selectors';

export function ContactsPage() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(filtredContactsSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Phone Book </h2>
        <FormContacts />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        {filteredContacts && <Contacts contacts={filteredContacts} />}
      </div>
    </>
  );
}

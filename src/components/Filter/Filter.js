import { ImpytStyle, TextSpan, FiltrBox } from './Filter.styles';
import { useDispatch, useSelector } from 'react-redux';
import { phoneBook } from 'redux/tasks/phoneBook.slice';
import { contactsFilterSelector } from 'redux/tasks/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsFilterSelector);

  const onChangeValue = e => {
    const value = e.target.value.trim().toLowerCase();
    dispatch(phoneBook.actions.setFilter(value));
  };
  return (
    <>
      <FiltrBox>
        <TextSpan>Find contacts by name</TextSpan>
        <div>
          <ImpytStyle
            onChange={onChangeValue}
            value={filter}
            type="text"
            name="name"
            placeholder="Search"
          />
        </div>
      </FiltrBox>
    </>
  );
};

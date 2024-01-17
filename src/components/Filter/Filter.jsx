import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactSlice';
import { selectFilter } from '../../redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <input
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="Find contacts by name:"
    />
  );
};
export default Filter;

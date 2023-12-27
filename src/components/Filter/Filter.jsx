import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactSlice';
import { selectFilter } from '../../redux/selectors';

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

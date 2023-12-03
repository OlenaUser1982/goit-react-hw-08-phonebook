const Filter = ({ filter, onChange }) => (
  <input
    type="text"
    value={filter}
    onChange={e => onChange(e)}
    placeholder="Find contacts by name:"
  />
);
export default Filter;

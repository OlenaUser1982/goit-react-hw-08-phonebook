const Filter = ({ filter, onChange }) => (
  <input
    type="text"
    value={filter}
    onChange={e => onChange(e)}
    placeholder="Filter contacts by name:"
  />
);
export default Filter;

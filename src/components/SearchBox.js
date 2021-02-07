const SearchBox = ({ onSearch }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;

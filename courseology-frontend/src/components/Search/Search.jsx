import "./Search.scss";
const Search = ({ handleInput }) => {
  const handleEvent = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    handleInput(cleanInput);
  };
  return (
    <div className="searchBox">
      <h3 className="searchBox__employee">Find your employees..</h3>
      <input
        type="text"
        placeholder="Search title"
        onInput={handleEvent}
        className="search-box__input"
      />
    </div>
  );
};
export default Search;

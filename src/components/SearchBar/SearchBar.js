import './SearchBar.css';

function SearchBar({ updateSearchField }) {

  const filterPeople = (e) => {
    console.log(e.target.value);
  }
  return (
        <div className="pa4-l">
          <form className="mw7 center pa2 br2-ns">
            <fieldset className="cf bn ma0 pa0">
              <div className="cf tc">
                <label className="clip" htmlFor="search-query">Search Query</label>
                <input
                  className="f6 f5-l input-reset bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns db center ba b--black-10"
                  placeholder="Search the Galaxy..."
                  type="text"
                  name="search-query"
                  id="search-query"
                  onChange={updateSearchField}
                />
              </div>
            </fieldset>
          </form>
        </div>
  );
}

export default SearchBar;

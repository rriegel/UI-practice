import { useState } from "react";
import './Search.css';
import getCountries from "./utils/getCountries";

var countries;

getCountries()
.then(res => countries = res.data)
.catch(err => console.log(err));

function Search({countrySelect}) {

  let [searching, toggleSearch] = useState(false);
  var [filteredCountries, setFilter] = useState([]);

  const handleChange = (e) => {
    let searchString = e.target.value.toLowerCase();
    setFilter(countries.filter(entry => {
      return entry.Country.toLowerCase().includes(searchString);
    }))
  }

  const handleClick = (e) => {
    let slug = e.target.dataset.slug;
    toggleSearch(false);
    countrySelect(slug);
  }

  const renderList = () => {
    if (searching && countries) {
      return (
        filteredCountries.map((entry, key) => {
          return (
            <div
              className="search-item"
              onClick={handleClick}
              key={key}
              data-slug={entry.Slug}>
              {entry.Country}
            </div>
          )
        })
      )
    }
  }

  return (
    <div className="inner-item">
      <form>
        <input
          onChange={handleChange}
          onClick={() => toggleSearch(!searching)}
          type="text"
          placeholder="Search Country Data"
        />
      </form>
      <div className="search-results">
        {renderList()}
      </div>
    </div>
  )
}

export default Search;
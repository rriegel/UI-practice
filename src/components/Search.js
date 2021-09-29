import getCountries from "./utils/getCountries";
var countries;

getCountries()
  .then(res => {
    countries = res.data;
  })
  .catch(err => {
    console.log(err);
  });

function Search (props) {

  const handleChange = (e) => {
    let searchString = e.target.value
    console.log(countries.filter(entry => {
      return entry.Country.includes(searchString);
    }))
  }
  return (
    <div className="inner-item">
      <form>
        <input
        onChange={handleChange}
          type="text"
          placeholder="Search Country Data"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search;
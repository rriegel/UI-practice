import "./MenuBar.css";
import Search from "./Search";

function MenuBar ({ date, items, tabClick, countrySelect }) {

  return (
    <div className="Menu-wrapper">

      <div className="item inner-wrapper">
        <h2 className="inner-item">
          COVID-19 Tracker
        </h2>
        <h2 className="inner-item">
          { date }
        </h2>
      </div>

      <Search countrySelect={ countrySelect } />

      <div className="item inner-wrapper">
        {items.map((d, key) => (
          <div
            onClick={ () => tabClick(d) }
            className= { `inner-item tab ${d.active ? 'active' : ''}` }
            key={ key }
          >
            { d.label }
          </div>
        ))}
      </div>

    </div>
  )
}

export default MenuBar;
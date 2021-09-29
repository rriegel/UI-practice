import "./MenuBar.css";
import Search from "./Search";

function MenuBar (props) {
  return (
    <div className="Menu-wrapper">
      <div className="item inner-wrapper">
        <h2 className="inner-item">
          COVID-19 Tracker
        </h2>
        <h2 className="inner-item">
          {props.date}
        </h2>
      </div>
      <Search />
      <div className="item inner-wrapper">
        {props.items.map(d => (
          <div
            onClick={(e) => props.handleClick(d)}
            className= { `inner-item tab ${d.active ? 'active' : ''}` }
            key={d.label}
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuBar;
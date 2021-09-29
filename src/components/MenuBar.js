import "./MenuBar.css";
import Search from "./Search";

function MenuBar (props) {
  return (
    <div className="Menu-wrapper">
      <h2 className="item">
        COVID-19 Tracker
      </h2>
      <h2 className="item">
        {props.date}
      </h2>
      <Search />
      {props.items.map(d => (
        <div
          onClick={(e) => props.handleClick(d)}
          className= { `item tab ${d.active ? 'active' : ''}` }
          key={d.label}
        >
          {d.label}
        </div>
      ))}
    </div>
  )
}

export default MenuBar;
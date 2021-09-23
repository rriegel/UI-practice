import "./MenuBar.css";

function MenuBar (props) {
  return (
    <div className="Menu-wrapper">
      <h2 className="item">
        COVID-19 Tracker
      </h2>
      <h2 className="item">
        {props.date}
      </h2>
      {props.items.map(d => (
        <div
          onClick={(e) => props.handleClick(d)}
          className= { `item ${d.active ? 'active' : ''}` }
          key={d.label}
        >
          {d.label}
        </div>
      ))}
    </div>
  )
}

export default MenuBar;
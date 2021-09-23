import "./MenuBar.css";

function MenuBar (props) {
  return (
    <div className="Menu-wrapper">
      <div>
        COVID-19 Tracker
      </div>
      <div>
        {props.date}
      </div>
      {props.items.map(d => (
        <div
          onClick={(e) => props.handleClick(d)}
          className={d.active ? 'active' : ''}
          key={d.label}
        >
          {d.label}
        </div>
      ))}
    </div>
  )
}

export default MenuBar;
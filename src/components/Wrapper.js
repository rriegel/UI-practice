import MenuBar from './MenuBar';
import './Wrapper.css';
import { useState } from 'react';
import getItems from './items';

function Wrapper (props) {
  const [items, setItems] = useState(getItems());

  const onHandleClick = (d) => {
    items.forEach(b => (b.active = false));
    d.active = true;
    setItems([...items]);
    props.handleRedirect(d);
  }
  return (
    <div>
      <MenuBar handleClick={onHandleClick} items={items} date={props.date}/>
    </div>
  )
}

export default Wrapper;
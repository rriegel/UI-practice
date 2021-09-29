import MenuBar from './MenuBar';
import { useState } from 'react';
import getItems from './items';

function Wrapper ({handleRedirect, date}) {
  const [items, setItems] = useState(getItems());

  const onTabClick = (d) => {
    items.forEach(b => (b.active = false));
    d.active = true;
    setItems([...items]);
    handleRedirect(d);
  }

  return (
    <div>
      <MenuBar tabClick={onTabClick} items={items} date={date}/>
    </div>
  )
}

export default Wrapper;

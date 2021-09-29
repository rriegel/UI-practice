import MenuBar from './MenuBar';
import { useState } from 'react';
import getItems from './items';

function Wrapper ({handleRedirect, date}) {
  const [items, setItems] = useState(getItems());

  const onTabClick = (e) => {
    items.forEach(b => (b.active = false));
    e.active = true;
    setItems([...items]);
    handleRedirect(e);
  }

  const onCountrySelect = (e) => handleRedirect(e);

  return (
    <div>
      <MenuBar tabClick={onTabClick} countrySelect={onCountrySelect} items={items} date={date}/>
    </div>
  )
}

export default Wrapper;

import './Content.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

function Country({country}) {

  // const [basicInfo, getBasic] = useState({});

  return(
    <div className="Content">
      <h1>
        {country}
      </h1>
    </div>
  )
};

export default Country;
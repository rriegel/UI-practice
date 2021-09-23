import {useState, useEffect} from 'react';
import axios from 'axios';

function Home() {

  const [global, setGlobal] = useState({});
  useEffect(() => {
    const getGlobal = async () => {
      const url = 'https://api.covid19api.com/summary';
      const result = await axios.get(url);
      setGlobal(result.data.Global);
    }
    getGlobal();
  }, []);

  return(
    <div className="Global">
      <header className="Global-header">
        <h1>
          Global Stats Today
        </h1>
        <p>
          New Confirmed Cases: {global.NewConfirmed}
        </p>
        <p>
          New Confirmed Cases: {global.NewConfirmed}
        </p>
        <p>
          Total Confirmed Cases: {global.TotalConfirmed}
        </p>
        <p>
          New Deaths: {global.NewDeaths}
        </p>
        <p>
          Total Deaths: {global.TotalDeaths}
        </p>
      </header>
    </div>
  )
};

export default Home;
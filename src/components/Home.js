import './Content.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home({setDate}) {

  const [globalStats, setGlobal] = useState({});

  useEffect(() => {
    const getGlobal = async () => {
      const url = 'https://api.covid19api.com/summary';
      const result = await axios.get(url);
      setGlobal(result.data.Global);
      let date = new Date(result.data.Global.Date);
      date = date.toString().split(' ');
      setDate(date.slice(0, 4).join(' '));
    }
    getGlobal();
  }, [setDate]);

  return(
    <div className="Content">
      <h1>
        Global Stats Today
      </h1>
      <p>
        New Confirmed Cases: {globalStats.NewConfirmed}
      </p>
      <p>
        Total Confirmed Cases: {globalStats.TotalConfirmed}
      </p>
      <p>
        New Deaths: {globalStats.NewDeaths}
      </p>
      <p>
        Total Deaths: {globalStats.TotalDeaths}
      </p>
    </div>
  )
};

export default Home;
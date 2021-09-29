import './Content.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home(props) {

  const [global, setGlobal] = useState({});
  useEffect(() => {
    const getGlobal = async () => {
      const url = 'https://api.covid19api.com/summary';
      const result = await axios.get(url);
      setGlobal(result.data.Global);
      let date = new Date(result.data.Global.Date);
      date = date.toString().split(' ');
      props.setDate(date.slice(0, 4).join(' '));
    }
    getGlobal();
  }, [props]);

  return(
    <div className="Content">
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
    </div>
  )
};

export default Home;
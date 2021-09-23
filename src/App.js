import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [global, setGlobal] = useState({});
  const [date, setDate] = useState("");
  useEffect(() => {
    const getGlobal = async () => {
      const url = 'https://api.covid19api.com/summary';
      const result = await axios.get(url);
      setGlobal(result.data.Global);
      let date = new Date(result.data.Global.Date);
      date = date.toString().split(' ');
      setDate(date.slice(0, 5).join(' '));
    }
    getGlobal();
  }, [date]);

  console.log(global);

  return (
    <div>

      <div className="Global">
        <header className="Global-header">
          <h1>
            {date}
          </h1>
          <h1>
            Global
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

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </div>
  );
}

export default App;

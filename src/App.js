import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Wrapper from './components/Wrapper';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  // const [view, setView] = useState("Home");

  const [date, setDate] = useState("");
  useEffect(() => {
    const getGlobal = async () => {
      const url = 'https://api.covid19api.com/summary';
      const result = await axios.get(url);
      let date = new Date(result.data.Global.Date);
      date = date.toString().split(' ');
      setDate(date.slice(0, 4).join(' '));
    }
    getGlobal();
  }, [date]);

  console.log(global);
  // menu bar that contains the date and the title of the app
  // create a search bar in the middile to search for country data
  return (
    <div className="App">
      <Wrapper date={date}/>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;

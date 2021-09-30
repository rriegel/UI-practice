import './App.css';
import { useState } from 'react';
import Wrapper from './components/Wrapper';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Country from './components/Country';

function App() {
  const [view, setView] = useState("Home");
  const [date, setDate] = useState("");

  const onRedirect = (e) => {
    setView(e.label || e);
  };

  const renderView = () => {
    if (view === "Home") {
      return (<Home setDate={ setDate }/>);
    } else if (view === "About") {
      return (<About />);
    } else if (view === "Contact") {
      return (<Contact />);
    } else {
      return (<Country country={ view }/>);
    }
  };

  return (

    <div className="App">
      <Wrapper date={ date } handleRedirect={ onRedirect }/>
      <div className="background">
        { renderView() }
      </div>
    </div>
  );
}

export default App;

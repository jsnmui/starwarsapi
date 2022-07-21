import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ShipList from "./components/shipList"
import About from './components/pages/About'

const App = () => {
  // sets up our app state
  const [ships, setStarships] = useState(null);

  useEffect(() => {
    fetch(
      "https://swapi.dev/api/starships/"
    )  
    .then(response => response.json())
    .then(data => setStarships(data));
      
  }, []);
  if(ships)
 console.log(ships)
  return (
    <div className="App">
      <h1>Star Wars APP</h1>

    <Switch>

      <Route path='/about'>
          <About />
      </Route>

      <Route path='/'>
        {ships && <ShipList ships={ships} />}
      </Route>

    </Switch>
     
    </div>
  );
};

export default App;

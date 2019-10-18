import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import {Switch, Route} from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const jacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
);
const sneakersPage = () => (
  <div>
    <h1>SNEAKERS PAGE</h1>
  </div>
);
const womensPage = () => (
  <div>
    <h1>WOMENS PAGE</h1>
  </div>
);
const mensPage = () => (
  <div>
    <h1>MENS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/hats" component={HatsPage}/>
      </Switch>
    </div>
    )
}

export default App;

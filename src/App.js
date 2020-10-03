import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Basket from "./Pages/Basket";
import Home from "./Pages/Home";



export default function App() {

  const [PizzaInfo,SetPizzaInfo] = React.useState([])

  React.useEffect ( () => {
      fetch('http://127.0.0.1:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
          SetPizzaInfo(json.pizzas)
      })
  }, [])


  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/">
            <Home items={PizzaInfo}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

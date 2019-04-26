import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/" component={ProductList} />
        </Switch>
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </>
    );
  }
}

export default App;

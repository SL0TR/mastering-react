import React, { Component } from "react";
import "./App.css";
import Movies from "./components/pages/movies";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Rentals from "./components/pages/rentals";
import Customers from "./components/pages/customers";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container-fluid">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import { getCurrentUser } from "./services/authService";

import Movies from "./components/pages/movies";
import NavBar from "./components/navbar";
import Rentals from "./components/pages/rentals";
import Customers from "./components/pages/customers";
import NotFound from "./components/pages/notFound";
import MovieDetails from "./components/movieDetails";
import LoginForm from "./components/pages/login";
import RegisterForm from "./components/pages/register";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/common/logout";

import "./App.css";
class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container-fluid">
          <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/customers" component={Customers} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

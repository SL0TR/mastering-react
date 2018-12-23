import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    const errors = {},
      { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required";

    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;

    // call server
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1>Login</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="row d-flex">
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <div className="col-12 mt-4">
            <div className="row d-flex justify-content-center">
              <button className="btn btn-primary col-lg-2 col-4 ml-3">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // do something after the submit
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1>Login</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="row d-flex">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <div className="col-12 mt-4">
            <div className="row d-flex justify-content-center">
              {this.renderButton("Submit")}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

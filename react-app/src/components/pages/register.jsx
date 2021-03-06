import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { register } from "../../services/userService";
import { loginWithJwt } from "../../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", email: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { headers } = await register(this.state.data);
      loginWithJwt(headers["x-auth-token"]);
      window.location = "/";
    } catch (e) {
      if (e.response && e.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = e.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1>Register</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="row d-flex">
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          <div className="col-12 mt-4">
            <div className="row d-flex justify-content-center">
              {this.renderButton("Register")}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;

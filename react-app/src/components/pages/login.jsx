import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { login } from "../../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      await login(this.state.data);
      window.location = "/";
    } catch (e) {
      if (e.response && e.response.status === 400) {
        toast.error(e.response.data);
      }
    }
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
          {this.renderInput("email", "Email")}
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

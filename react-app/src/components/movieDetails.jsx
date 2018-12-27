import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";

class MovieDetails extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    stockNum: Joi.string()
      .required()
      .label("Number in Stock"),
    rate: Joi.string()
      .required()
      .label("Rate")
  };

  doSubmit = () => {
    // do something after the submit
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <div className="row">
          {/* <div className="col-12">
            <h1 className="text-center">
              Movie - {match.params.id ? match.params.id : "no data"}
            </h1>
          </div> */}
          <div className="col-12 mt-5 text-center">
            <h1>Movie Form</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="row d-flex">
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", getGenres())}
          {this.renderInput("stockNum", "Number In Stock")}
          {this.renderInput("rate", "Rate")}
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

export default MovieDetails;

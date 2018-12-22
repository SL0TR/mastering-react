import React, { Component } from "react";

class MovieDetails extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="text-center">Movie - {match.params.id}</h1>
        </div>
        <div className="col-12 mt-4 d-flex justify-content-center">
          <button onClick={this.handleSave} className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

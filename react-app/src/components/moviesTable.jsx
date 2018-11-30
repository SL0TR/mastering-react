import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onDelete, onLike } = this.props;

    return (
      <table className="table mt-5">
        <thead className="thead-dark">
          <tr>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("title")}
              scope="col"
            >
              Title
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("genre.name")}
              scope="col"
            >
              Genre
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("numberInStock")}
              scope="col"
            >
              Stock
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("dailyRentalRate")}
              scope="col"
            >
              Rate
            </th>
            <th scope="col">Actions</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;

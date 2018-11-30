import React from "react";
import Like from "./common/like";

const MoviesTable = props => {
  const { movies, onDelete, onLike, onSort } = props;

  return (
    <table className="table mt-5">
      <thead className="thead-dark">
        <tr>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("title")}
            scope="col"
          >
            Title
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("genre.name")}
            scope="col"
          >
            Genre
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("numberInStock")}
            scope="col"
          >
            Stock
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("dailyRentalRate")}
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
};

export default MoviesTable;

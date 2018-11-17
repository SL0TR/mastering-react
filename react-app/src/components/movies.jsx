import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };

  handleDelete = index => {
    let movies = [...this.state.movies];
    movies.splice(index, 1);
    this.setState({
      movies
    });
  };

  handleLike = index => {
    let movies = [...this.state.movies];
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({
      movies
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies } = this.state;
    const allMovies = paginate(movies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>
          {this.state.movies.length === 0
            ? "No results to be shown"
            : `${this.state.movies.length} items are listed below`}
        </p>
        <table className="table mt-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.getMovieList(allMovies)}</tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }

  getMovieList(movies) {
    const movieList = movies.map((movie, i) => {
      return (
        <tr key={movie._id}>
          <th scope="row">{i + 1}</th>
          <td>
            {" "}
            <strong>{movie.title}</strong>
          </td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            {" "}
            <Like liked={movie.like} onClick={() => this.handleLike(i)} />{" "}
            <button
              onClick={() => this.handleDelete(i)}
              className="btn btn-danger"
            >
              Delete
            </button>{" "}
          </td>
        </tr>
      );
    });

    return movieList;
  }
}

export default Movies;

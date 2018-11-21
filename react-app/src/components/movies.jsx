import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: []
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

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

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { pageSize, currentPage, movies, genres, selectedGenre } = this.state;
    const filteredMovies = selectedGenre
      ? movies.filter(m => m.genre._id === selectedGenre._id)
      : movies;
    const allMovies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <div className="row d-flex justify-content-center align-items-start">
        <div className="col-12">
          <p className="text-center lead">
            {filteredMovies.length === 0
              ? "No results to be shown"
              : `${filteredMovies.length} items are listed below`}
          </p>
        </div>
        <div className="col-2 mt-5">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col-7">
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
            <tbody>
              {allMovies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;

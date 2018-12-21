import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  getIndex = (movies, movie) => _.findIndex(movies, movie);

  handleDelete = movie => {
    let movies = [...this.state.movies];
    movies.splice(this.getIndex(movies, movie), 1);
    this.setState({
      movies
    });
  };

  handleLike = movie => {
    let movies = [...this.state.movies];
    let index = this.getIndex(movies, movie);
    console.log(movies[index]);

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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies,
      selectedGenre,
      sortColumn
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter(m => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const allMovies = paginate(sorted, currentPage, pageSize);

    return {
      totalCount: filteredMovies.length,
      data: allMovies
    };
  };

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;

    const { totalCount, data: allMovies } = this.getPagedData();

    return (
      <div className="row d-flex justify-content-center align-items-start">
        <div className="col-12">
          <p className="text-center lead">
            {totalCount === 0
              ? "No results to be shown"
              : `${totalCount} items are listed below`}
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
          <MoviesTable
            sortColumn={sortColumn}
            movies={allMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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

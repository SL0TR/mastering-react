import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import ListGroup from "../common/listGroup";
import { getGenres } from "../../services/fakeGenreService";
import { Link } from "react-router-dom";
import MoviesTable from "../moviesTable";
import _ from "lodash";
import SearchBox from "../common/searchBox";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
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
      sortColumn,
      searchQuery
    } = this.state;

    let filteredMovies = movies;

    if (searchQuery)
      filteredMovies = movies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filteredMovies = movies.filter(m => m.genre._id === selectedGenre._id);

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
      sortColumn,
      searchQuery
    } = this.state;

    const { totalCount, data: allMovies } = this.getPagedData();

    return (
      <div className="row d-flex justify-content-center align-items-start">
        <div className="col-12 mt-5">
          <h1 className="text-center">Movies</h1>
        </div>
        <div className="col-12 mt-2">
          <p className="text-center lead">
            {totalCount === 0
              ? "No results to be shown"
              : `${totalCount} items are listed below`}
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Link className="btn btn-primary" to="/movies/new">
            <strong>Add New Movie +</strong>
          </Link>
        </div>
        <div className="col-12 mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-10">
              <SearchBox value={searchQuery} onChange={this.handleSearch} />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-4 mt-5">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col-lg-7 col-8">
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

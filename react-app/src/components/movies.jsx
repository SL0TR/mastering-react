import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component {
  state = { 
    movies: getMovies()
   }

  deleteMovie = (index) => {
    let movies = this.state.movies;
    movies.splice(index, 1);
    this.setState({
      movies
    })
  }

  setLike = (index) => {
    let movies = this.state.movies;
    movies[index].like = !movies[index].like;
    this.setState({
      movies
    })
  }

  render() {
    return ( 
      <React.Fragment>
        <p>{ this.state.movies.length === 0 ? 'No results to be shown' : `${this.state.movies.length} items are listed below` }</p>
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
            { this.getMovieList() }
          </tbody>
        </table>
      </React.Fragment>
     );
  }

  getMovieList() {
    const movieList = this.state.movies.map((movie, i) => {
      return (
        <tr key={movie._id}>
          <th scope="row">{i+1}</th>
          <td> <strong>{movie.title}</strong></td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td> <i className={this.getIconClasses(movie)} aria-hidden="true" onClick={ () => this.setLike(i) } ></i> <button onClick={() => this.deleteMovie(i)} className="btn btn-danger">Delete</button> </td>
        </tr>
      )
    })

    return movieList;
  }

  getIconClasses(item) {
    let classes = "fa mr-4 fa-";
    classes += (item.like === false) ? "heart-o" : "heart";
    return classes;
  }
}
 
export default Movies;
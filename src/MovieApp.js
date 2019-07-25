import React, { Component } from "react";

class MovieApp extends Component {
  state = {
    searchMovie: "",
    rate: 0,
    movie: [
      {
        rate: "5",
        img: "https://www.movie-list.com/img/posters/big/shazam.jpg",
        title: "Shazam",
        year: "2019"
      },
      {
        rate: "4",
        img: "https://www.movie-list.com/img/posters/big/aquarela.jpg",
        title: "Aquarela",
        year: "2016"
      },
      {
        rate: "3",
        img: "https://www.movie-list.com/img/posters/big/shaft.jpg",
        title: "Shaft",
        year: "2005"
      }
    ],
    currentMovie: [
      {
        rate: "5",
        img: "https://www.movie-list.com/img/posters/big/shazam.jpg",
        title: "Shazam",
        year: "2019"
      },
      {
        rate: "4",
        img: "https://www.movie-list.com/img/posters/big/aquarela.jpg",
        title: "Aquarela",
        year: "2016"
      },
      {
        rate: "3",
        img: "https://www.movie-list.com/img/posters/big/shaft.jpg",
        title: "Shaft",
        year: "2005"
      }
    ]
  };
  onChangeMovie = event => {
    this.setState({ searchMovie: event.target.value });
  };

  onClickSearch = () => {
    const filterMovie = this.state.movie.filter(movie => {
      console.log(movie.title);
      return movie.title === this.state.searchMovie;
    });
    this.setState({ currentMovie: filterMovie });
  };

  onChangeRate = () => {
    this.setState = {};
  };

  onChangeRatex = () => {
    this.setState = {};
  };

  onChangeTitle = () => {
    this.setState = {};
  };

  onChangeYear = () => {
    this.setState = {};
  };

  onChangeImage = () => {
    this.setState = {};
  };

  onClickPlus = () => {
    this.setState = {};
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeMovie} />
        <button onClick={this.onClickSearch}>Search</button>
        <input type="text" onChange={this.onChangeRate} />
        <div className="listMovie">
          {this.state.currentMovie.map(e => (
            <div className="movies">
              <div>{e.rate}</div>
              <img src={e.img} />
              <div>{e.title}</div>
              <div>{e.year}</div>
            </div>
          ))}
        </div>
        <div>
          <input type="text" placeholder="rate" onChange={this.onChangeRatex} />
          <input
            type="text"
            placeholder="title"
            onChange={this.onChangeTitle}
          />
          <input type="text" placeholder="year" onChange={this.onChangeYear} />
          <input
            type="text"
            placeholder="image"
            onChange={this.onChangeImage}
          />
          <button onClick={this.onClickPlus}>+</button>
        </div>
      </div>
    );
  }
}

export default MovieApp;

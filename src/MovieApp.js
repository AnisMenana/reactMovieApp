import React, { Component } from "react";
import Rating from "./rating";
import Modal from "./Modal";

class MovieApp extends Component {
  state = {
    loading: false,
    loadingRate: false,
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
        rate: 5,
        img: "https://www.movie-list.com/img/posters/big/shazam.jpg",
        title: "Shazam",
        year: "2019"
      },
      {
        rate: 4,
        img: "https://www.movie-list.com/img/posters/big/aquarela.jpg",
        title: "Aquarela",
        year: "2016"
      },
      {
        rate: 3,
        img: "https://www.movie-list.com/img/posters/big/shaft.jpg",
        title: "Shaft",
        year: "2005"
      }
    ],
    movieAdd: {
      rate: "",
      img: "",
      title: "",
      year: ""
    }
  };
  onChangeMovie = event => {
    this.setState({ searchMovie: event.target.value });
  };

  onClickSearch = () => {
    const filterMovie = this.state.movie.filter(movie => {
      console.log(movie.title);
      return movie.title === this.state.searchMovie;
    });
    this.setState({ currentMovie: [], loading: true });

    setTimeout(() => {
      this.setState({ currentMovie: filterMovie });
    }, 2000);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  onChangeRate = event => {
    this.setState({ rate: event.target.value });
  };

  onClickRate = () => {
    const filterRate = this.state.movie.filter(movie => {
      return movie.rate === this.state.rate;
    });
    this.setState({ currentMovie: [], loadingRate: true });
    setTimeout(() => {
      this.setState({ currentMovie: filterRate });
    }, 2000);
    setTimeout(() => {
      this.setState({ loadingRate: false });
    }, 2000);
  };

  onChangeRatex = event => {
    const ratex = event.target.value;
    this.setState(prevState => {
      console.log(prevState);
      let movieAdd = Object.assign({}, prevState.movieAdd); // creating copy of state variable jasper
      movieAdd.rate = ratex; // update the name property, assign a new value
      return { movieAdd }; // return new object jasper object
    });
  };

  onChangeTitle = event => {
    const titlex = event.target.value;
    this.setState(prevState => {
      let movieAdd = Object.assign({}, prevState.movieAdd); // creating copy of state variable jasper
      movieAdd.title = titlex; // update the name property, assign a new value
      return { movieAdd }; // return new object jasper object
    });
  };

  onChangeYear = event => {
    const yearx = event.target.value;
    this.setState(prevState => {
      let movieAdd = Object.assign({}, prevState.movieAdd); // creating copy of state variable jasper
      movieAdd.year = yearx; // update the name property, assign a new value
      return { movieAdd }; // return new object jasper object
    });
  };

  onChangeImage = event => {
    const imgx = event.target.value;
    this.setState(prevState => {
      let movieAdd = Object.assign({}, prevState.movieAdd); // creating copy of state variable jasper
      movieAdd.img = imgx; // update the name property, assign a new value
      return { movieAdd }; // return new object jasper object
    });
  };

  onClickPlus = () => {
    this.setState({
      currentMovie: this.state.movie.concat(this.state.movieAdd)
    });
  };
  render() {
    const { loading } = this.state;
    const { loadingRate } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeMovie}
          placeholder="Name Movie"
        />

        <button onClick={this.onClickSearch} disabled={loading}>
          {loading && <i class="fas fa-spinner fa-spin" />}
          {loading && <span>Loading...</span>}
          {!loading && <span>Search</span>}
        </button>
        <input
          type="text"
          onChange={this.onChangeRate}
          placeholder="Rate Movie"
        />
        <button onClick={this.onClickRate} disabled={loadingRate}>
          {loadingRate && <i class="fas fa-spinner fa-spin" />}
          {loadingRate && <span>Loading...</span>}
          {!loadingRate && <span>Search rate</span>}
        </button>

        <div className="listMovie">
          {this.state.currentMovie.map(e => (
            <div className="movies">
              <div>
                <Rating count={e.rate} />
              </div>
              <img src={e.img} />
              <div>{e.title}</div>
              <div>{e.year}</div>
            </div>
          ))}
        </div>
        <div>
          <Modal
            sendmovie={newmovie => {
              this.setState({
                currentMovie: this.state.movie.concat([newmovie])
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default MovieApp;

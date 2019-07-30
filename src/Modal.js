import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      rate: 1,
      img: "",
      title: "",
      year: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onClickPlus = () => {
    const newMovie = {
      rate: this.state.rate,
      img: this.state.img,
      title: this.state.title,
      year: this.state.year
    };
    this.toggle();
    return this.props.sendmovie(newMovie);
    // this.setState({
    //   currentMovie: this.state.movie.concat(this.state.movieAdd)
    // });
  };
  onchange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Add Movie
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
          <ModalBody>
            <input
              type="text"
              placeholder="rate"
              name="rate"
              onChange={this.onchange}
            />
            <input
              type="text"
              placeholder="image"
              name="img"
              onChange={this.onchange}
            />
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={this.onchange}
            />
            <input
              type="text"
              placeholder="year"
              name="year"
              onChange={this.onchange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onClickPlus}>
              Add movie
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;

import React, { Component } from "react";
import { connect } from "react-redux";
import { addVideo } from "../actions/index";

import "./form.css";

function mapDispatchToProps(dispatch) {
  return {
    addVideo: video => dispatch(addVideo(video))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { link } = this.state;
    this.props.addVideo(link);
    this.setState({ link: "" });
  }
  render() {
    const { link } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="link">YT Link</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;

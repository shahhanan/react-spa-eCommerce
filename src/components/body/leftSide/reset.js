import React, { Component } from "react";

class Reset extends Component {
    render() {
      return (
        <div className="g-mb-30">
          <hr />
          <button
            className="btn btn-block u-btn-black g-font-size-12 text-uppercase g-py-12 g-px-25"
            type="button" onClick ={() => this.props.handleClickReset()}
          >
            Reset
          </button>
        </div>
      );
    }
  }
  export default Reset;
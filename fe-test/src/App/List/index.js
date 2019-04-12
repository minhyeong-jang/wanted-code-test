import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  render() {
    return <div>
      {this.props.dogs.map(dog => (
        <div>
          <img src={dog} />
        </div>
      ))}
    </div>;
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs
});
export default connect(
  mapStateToProps,
  undefined
)(List);

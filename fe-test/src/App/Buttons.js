import React, { Component } from "react";
import { connect } from "react-redux";

import { updateDogs } from "../redux";

class Buttons extends Component {
  // 시바견 업데이트
  _handleGetDog = () => {};
  // 시바견 리스트 초기화
  _handleClearDog = () => {};

  render() {
    return (
      <div>
        <button onClick={() => this._handleGetDog()}>GET DOGS</button>
        <button onClick={() => this._handleClearDog()}>CLEAR DOGS</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs
});
const mapDispatchToProps = dispatch => ({
  updateDogs: params => dispatch(updateDogs(params))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);

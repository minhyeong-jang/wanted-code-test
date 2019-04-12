import React, { Component } from "react";
import { connect } from "react-redux";

import { updateDogs, clearDogs } from "../redux";

class Buttons extends Component {
  // 시바견 업데이트
  _handleGetDog = () => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => {
        this.props.updateDogs(data);
      })
      .catch(e => console.log(e));
  };
  // 시바견 리스트 초기화
  _handleClearDog = () => {
    this.props.clearDogs([]);
  };

  render() {
    return (
      <div>
        <button onClick={() => this._handleGetDog()}>GET DOGS</button>
        <button onClick={() => this._handleClearDog()}>CLEAR DOGS</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateDogs: params => dispatch(updateDogs(params)),
  clearDogs: params => dispatch(clearDogs(params))
});
export default connect(
  undefined,
  mapDispatchToProps
)(Buttons);

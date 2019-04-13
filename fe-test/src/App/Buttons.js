import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { getDogs, clearDogs, updateLoading } from "../redux";

class Buttons extends Component {
  // 시바견 업데이트
  _handleGetDog = async () => {
    this.props.updateLoading(true);
    const result = await axios.get("./data.json");
    this.props.getDogs(result.data);
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
  updateLoading: params => dispatch(updateLoading(params)),
  getDogs: params => dispatch(getDogs(params)),
  clearDogs: params => dispatch(clearDogs(params))
});
export default connect(
  undefined,
  mapDispatchToProps
)(Buttons);

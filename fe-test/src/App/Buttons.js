import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

import { updateDogs, clearDogs, updateLoading } from "../redux";

const Button = styled.button`
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
  border-color: #d9d9d9;
  margin-top: 10px;
  width: 150px;
  &:first-child {
    margin-right: 5px;
  }
  &:hover {
    color: #1890ff;
    border-color: #1890ff;
  }
  &:active {
    opacity: 0.6;
  }
`;

class Buttons extends Component {
  // 시바견 업데이트
  _handleGetDog = async () => {
    this.props.updateLoading(true);
    const result = await axios.get("./data.json");
    this.props.updateDogs(result.data);
  };
  // 시바견 리스트 초기화
  _handleClearDog = () => {
    if (this.props.isLoading) {
      alert("이미지 준비중입니다.");
      return false;
    }
    this.props.clearDogs([]);
  };

  render() {
    return (
      <div>
        <Button onClick={() => this._handleGetDog()}>GET DOGS</Button>
        <Button onClick={() => this._handleClearDog()}>CLEAR DOGS</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading
});
const mapDispatchToProps = dispatch => ({
  updateLoading: params => dispatch(updateLoading(params)),
  updateDogs: params => dispatch(updateDogs(params)),
  clearDogs: params => dispatch(clearDogs(params))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);

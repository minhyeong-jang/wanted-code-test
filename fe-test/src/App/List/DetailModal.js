import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Modal = styled.div``;
const Body = styled.div`
  position: fixed;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 10px;
  z-index: 10;
  background-color: white;
  outline: none;
  img {
    display: block;
    max-height: 80vh;
    max-width: 100%;
  }
`;
const Header = styled.div`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: bold;
`;
const Button = styled.button`
  display: block;
  outline: none;
  cursor: pointer;
  background-color: white;
  border: 1px solid #dedede;
  padding: 10px 15px;
  border-radius: 4px;
  margin: 5px auto;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

class DetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.visible === this.props.visible) return false;
    return true;
  }
  componentDidUpdate() {
    this.body.focus();
  }
  render() {
    const { visible, onClose, data } = this.props;
    return (
      <Modal style={{ display: visible ? null : "none" }}>
        <Body
          ref={ref => (this.body = ref)}
          onKeyDown={e => (e.keyCode === 27 ? onClose() : null)}
          tabIndex={0}
        >
          <Header>이름 모를 시바</Header>
          <img src={data} alt="강아지 상세보기" />
          <Button onClick={onClose}>닫기</Button>
        </Body>
        <Background onClick={onClose} />
      </Modal>
    );
  }
}

DetailModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.string
};

export default DetailModal;

import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 10px;
  z-index: 10;
  background-color: white;
  img {
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
  padding: 10px 15px;
  border-radius: 4px;
  border-color: #d9d9d9;
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

const DetailModal = props => {
  const { visible, onClose, data } = props;
  console.log(props);
  return (
    <React.Fragment>
      <Modal style={{ display: visible ? null : "none" }}>
        <Header>이름 모를 시바</Header>
        <img src={data} alt="강아지 상세보기" />
        <Button onClick={onClose}>닫기</Button>
      </Modal>
      <Background
        style={{ display: visible ? null : "none" }}
        onClick={onClose}
      />
    </React.Fragment>
  );
};

export default DetailModal;

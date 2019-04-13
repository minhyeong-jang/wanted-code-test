import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Masonry from "react-masonry-component";
import axios from "axios";

import { getDogs, updateLoading } from "../../redux";

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 200px;
  word-break: keep-all;
  border: 1px solid #dedede;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 12px;
`;
const Card = styled.div`
  width: 100%;
  margin: 10px 0px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3),
    0 5px 12px rgba(133, 133, 133, 0.22);

  img {
    display: block;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: calc(25% - 10px);
    margin: 5px;
  }
`;
const EmptyCard = styled.div`
  width: calc(25% - 10px);
  margin: 10px 0px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3),
    0 5px 12px rgba(133, 133, 133, 0.22);
  height: 200px;
  background-color: #dedede;
  background-size: contain;
  background-position: center;
  background-image: url("https://www.materialui.co/materialIcons/image/photo_camera_grey_192x192.png");
  background-repeat: no-repeat;
`;
const Container = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 10px;
  ul {
    padding: 0;
    margin: 0;
  }
  ul.hide {
    ${Card} {
      display: none;
    }
  }
  ul.show {
    animation: fadein 1s;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { initLoad: true };
  }
  componentDidMount() {
    window.addEventListener("scroll", this._handleGetDog, false);
  }
  _handleGetDog = async () => {
    const scrollTop = window.scrollY;
    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercent = scrollTop / (bodyHeight - windowHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded >= 95) {
      this.props.updateLoading(true);
      const result = await axios.get("./data.json");
      this.props.getDogs(result.data);
    }
  };

  render() {
    console.log("Rendering...");
    const { dogs, isLoading } = this.props;
    return (
      <Container>
        {this.state.initLoad && !isLoading ? (
          <Info>스크롤을 내리거나 GET DOGS 버튼을 클릭해주세요</Info>
        ) : null}
        <Masonry
          className={this.state.initLoad && isLoading ? "hide" : "show"}
          elementType={"ul"}
          options={{ transitionDuration: 0 }}
          onImagesLoaded={e => {
            if (isLoading) {
              this.props.updateLoading(false);
              this.setState({ initLoad: false });
            }
          }}
          onLayoutComplete={e => console.log("onLayoutComplete")}
        >
          {dogs.map((dog, index) => (
            <Card key={index}>
              <img src={dog} alt={dog} />
            </Card>
          ))}
          {!isLoading ? <EmptyCard>이미지 준비중 입니다.</EmptyCard> : null}
        </Masonry>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs,
  isLoading: state.isLoading
});
const mapDispatchToProps = dispatch => ({
  getDogs: params => dispatch(getDogs(params)),
  updateLoading: params => dispatch(updateLoading(params))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

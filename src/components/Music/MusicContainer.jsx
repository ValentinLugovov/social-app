import React from "react";
import { connect } from "react-redux";
import {
  setTitle,
  setSubTitle,
  setImage,
  getTracks,
  toggleIsFetching,
  getTopMusic,
} from "../../redux/musicReducer";
import Music from "./Music";
import Preloader from "../common/Preloader/Preloader";

class MusicContainer extends React.Component {
  componentDidMount() {
    this.props.getTopMusic();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Music
          {...this.props}
          // title={this.props.title}
          // subtitle={this.props.subtitle}
          tracks={this.props.tracks}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  // title: state.musicPage.title,
  // subtitle: state.musicPage.subtitle,
  // image: state.musicPage.image,
  isFetching: state.musicPage.isFetching,
  tracks: state.musicPage.tracks,
});

export default connect(mapStateToProps, {
  setTitle,
  setSubTitle,
  setImage,
  getTracks,
  toggleIsFetching,
  getTopMusic,
})(MusicContainer);

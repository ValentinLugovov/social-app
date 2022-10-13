import React from "react";
import { connect } from "react-redux";
import {
  setTitle,
  setSubTitle,
  setImage,
  getTracks,
  toggleIsFetching,
} from "../../redux/musicReducer";
import { musicAPI } from "../../api/api";
import Music from "./Music";
import Preloader from "../common/Preloader/Preloader";

class MusicContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    musicAPI.getMusicList().then((data) => {
      // this.props.setTitle(data.tracks[1].title);
      // this.props.setSubTitle(data.tracks[1].subtitle);
      // this.props.setImage(data.tracks[0].share.image);
      this.props.toggleIsFetching(false);
      this.props.getTracks(data.tracks);
    });
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
})(MusicContainer);

import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import s from "./profile.module.css";
import { setUsersProfile } from "../../redux/profileReducer";
import axios from "axios";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
  }

  render() {
    return (
      <div className={s.profileBlock}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithRouterContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(
  WithRouterContainerComponent
);

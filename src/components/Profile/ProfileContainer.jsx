import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import s from "./profile.module.css";
import { getUserId } from "../../redux/profileReducer";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 26206;
    }
    this.props.getUserId(userId);
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

export default compose(
  connect(mapStateToProps, { getUserId }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

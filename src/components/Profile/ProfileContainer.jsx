import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import s from "./profile.module.css";
import { getUserId } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
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

let WithRouterContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserId })(
  WithRouterContainerComponent
);

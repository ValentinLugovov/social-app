// контейнер скрывает стейт от компонент и передает данные через пропсы
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers,
} from "../../redux/friendsReducer";
import Friends from "./Friends";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Friends
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          friends={this.props.friends}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //достаем из стейта значения, перерисовываем и прокидываем обратно в FriendsContainer
  return {
    friends: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followingInProgress: state.friendsPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers,
})(FriendsContainer);

// const mapDispatchToProps = (dispatch) => {
//   // возвращаем колбеки и диспатчит в стор
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setUsersTotalCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

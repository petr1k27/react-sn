import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentUsersPage,
    setIsFetching,
    setTotalCount,
    setUsers, setFollowingIsProgress, requestUsers,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCountUsersOnPage,
    getCurrentUsersPage,
    getFollowingIsProgress,
    getIsFetching,
    getTotalCount, getUsers
} from "../../redux/users-selectors";


class usersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentUsersPage, this.props.countUsersOnPage);
    }


    onPageChanged = (currentPage) => {
        this.props.requestUsers(currentPage, this.props.countUsersOnPage);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount}
                       countUsersOnPage={this.props.countUsersOnPage}
                       currentUsersPage={this.props.currentUsersPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingIsProgress={this.props.followingIsProgress}
                       setFollowingIsProgress={this.props.setFollowingIsProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            users: getUsers(state),
            currentUsersPage: getCurrentUsersPage(state),
            countUsersOnPage: getCountUsersOnPage(state),
            totalCount: getTotalCount(state),
            isFetching: getIsFetching(state),
            followingIsProgress: getFollowingIsProgress(state),
        }
    )
};
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentUsersPage,
        setTotalCount,
        setIsFetching,
        setFollowingIsProgress,
        requestUsers,
    }),
    withAuthRedirect)(usersContainer);


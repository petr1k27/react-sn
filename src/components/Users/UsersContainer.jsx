import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentUsersPage,
    setIsFetching,
    setTotalCount,
    setUsers, setFollowingIsProgress, getUsers,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class usersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentUsersPage, this.props.countUsersOnPage);
    }


    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.countUsersOnPage);
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
            users: state.userPage.users,
            currentUsersPage: state.userPage.currentUsersPage,
            countUsersOnPage: state.userPage.countUsersOnPage,
            totalCount: state.userPage.totalCount,
            isFetching: state.userPage.isFetching,
            followingIsProgress: state.userPage.followingIsProgress,
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
        getUsers,
    }),
    withAuthRedirect)(usersContainer);


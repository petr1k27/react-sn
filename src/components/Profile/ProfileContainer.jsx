import Profile from "./Profile";
import {connect} from "react-redux";
import React from "react";
import {getUserProfile, getUserStatus, updateUserStatus, uploadUserPhoto} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    updateProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 16962;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     uploadUserPhoto={this.props.uploadUserPhoto}
            />
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
)

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, uploadUserPhoto}),
    withAuthRedirect,
    withRouter)(ProfileContainer);




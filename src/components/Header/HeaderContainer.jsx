import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {signOut} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        return(
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuthUser: state.auth.isAuthUser,
    }
}

export default connect(mapStateToProps, {signOut})(HeaderContainer);
import './App.css';
import Nav from "./components/Nav/Nav";
import Messenger from "./components/Messenger/Messenger";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>
                           }
                    />
                    <Route path="/messenger"
                           render={() => <Messenger/>}
                    />
                    <Route path="/users"
                           render={() => <UsersContainer/>}
                    />
                    <Route path="/login"
                           render={() => <Login/>}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App)

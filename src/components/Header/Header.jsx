import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import AuthUser from "./User/AuthUser";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://fedoraproject.org/w/uploads/d/d3/Fudcon_symbol.png" alt="logo"/>
            <div className={s.authBlock}>
                {props.isAuthUser ? <AuthUser signOut={props.signOut} login={props.login}/> : <NavLink to={'/login'}>LogIn</NavLink>}
            </div>
        </header>
    )
}

export default Header;
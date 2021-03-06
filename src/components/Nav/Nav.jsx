import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import profile from '../../assets/images/profile.svg'
import messenger from '../../assets/images/messenger.svg'
import users from '../../assets/images/users.svg'
import music from '../../assets/images/music.svg'
import settings from '../../assets/images/settings.svg'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <img src={profile} alt={'profile'}/>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>

            </div>
            <div className={s.item}>
                <img src={messenger} alt={'messenger'}/>
                <NavLink to="/messenger" activeClassName={s.active}>Messenger</NavLink></div>
            <div className={s.item}>
                <img src={users} alt={'users'}/>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <img src={music} alt={'music'}/>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <img src={settings} alt={'settings'}/>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
}
export default Nav;
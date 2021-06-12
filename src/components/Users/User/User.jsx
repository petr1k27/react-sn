import userPhoto from "../../../assets/images/user-male.png"
import s from './User.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={s.item}>
            <div >
                <NavLink to={`/profile/${props.id}`}>
                    <img className={s.userLogo}
                         src={ props.photos.small != null ? props.photos.small : userPhoto}
                         alt={'smallPhoto'}/>
                </NavLink>
            </div>
            <div>
                {props.name}
                <div>
                    {props.followed
                        ? <button disabled={props.followingIsProgress.some(userId => userId === props.id)}
                                  onClick={() => { props.unfollow(props.id); }}
                        >Unfollow</button>
                        : <button disabled={props.followingIsProgress.some(userId => userId === props.id)}
                                  onClick={() => { props.follow(props.id); }}
                        >Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default User;
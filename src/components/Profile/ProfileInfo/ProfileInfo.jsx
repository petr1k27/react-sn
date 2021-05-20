import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.header}>

            </div>
            <div className={s.description}>
                <div className={s.userName}>{"User name : " + props.profile.fullName}</div>
                <div><ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} /></div>
            </div>
        </div>

    )
}

export default ProfileInfo;
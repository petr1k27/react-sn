import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import Users from '../../../assets/images/user-male.png'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    let onUploadUserPhoto = (e) => {
        if(e.target.files.length) {
            props.uploadUserPhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.header}>
                <img src={props.profile.photos.large || Users} className={s.userPhoto} />
                <div>
                    <input type={'file'} onChange={onUploadUserPhoto}/>
                </div>
            </div>
            <div className={s.description}>
                <div className={s.userName}>{"User name: " + props.profile.fullName}</div>
                <div className={s.userName}>{"About me:" + props.profile.aboutMe}</div>
                <div className={s.userName}>{"Looking for a job: " + props.profile.lookingForAJob}</div>
                <div className={s.userName}>{"Job description: " + props.profile.lookingForAJobDescription}</div>
                <div className={s.userName}><ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} /></div>
            </div>
        </div>
    )
}

export default ProfileInfo;
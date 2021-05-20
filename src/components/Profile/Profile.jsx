import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;
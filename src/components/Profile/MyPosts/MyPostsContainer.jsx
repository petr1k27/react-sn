import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return(
        {
            posts: state.profilePage.posts,
            text: state.profilePage.text,
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return(
        {
            addPost: () => {
                dispatch(addPostActionCreator())
            },
            updateNewPostText: (text) => {
                dispatch(updateNewPostTextActionCreator(text))
            },
        }
    )
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
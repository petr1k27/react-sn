import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Textarea from "../../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20);
const AddNewPostForm = (props) => {

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newPost'} component={Textarea} placeholder={'Add new post'} validate={[required, maxLength20]}/>
                <div><button>Add post</button></div>
            </form>
        </div>
    )
}
const AddNewPostReduxForm = reduxForm({form: 'addNewPost'})(AddNewPostForm)

const MyPosts = (props) => {

    let postItems = props.posts.map(p => <Post id={p.id} message={p.post} likeCounter={p.likeCounter}/>);

    let addPost = (values) => {
        props.addPost(values.newPost);
    }

    return (
        <div className={s.posts}>
            <h3>My posts:</h3>
            <div className={s.newPost}>
                <AddNewPostReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.myPosts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;
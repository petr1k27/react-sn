import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postItems = props.posts.map(p => <Post id={p.id} message={p.post} likeCounter={p.likeCounter}/>);

    let reference = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText = () => {
        let text = reference.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={s.posts}>
            <h3>My posts:</h3>
            <div className={s.newPost}>
                <div>
                    <textarea onChange={updateNewPostText} value={props.text} ref={reference}/>
                </div>
                <div>
                    <button autoFocus={true} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.myPosts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
        <img alt={'ava'} className={s.img} src="https://sun9-1.userapi.com/impf/rVyO55oDkzLuP-7g3ZW5RCHWy0Oycie641UPKg/SLyRGI1aK34.jpg?size=669x892&quality=96&sign=6a87a13aa3188f271c5c6a1e5ed7cee2&type=album" />
            {props.message}
            <div>
                <span>Like</span> {props.likeCounter}
            </div>
        </div>

    )
}

export default Post;
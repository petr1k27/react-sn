import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.friendAva}>
                <img alt={'ava'} src={'https://i.pinimg.com/originals/e3/63/16/e36316cfd05ca21e44d8fabcf1a192be.jpg'}/>
            </div>
            <div className={s.friendName}>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;
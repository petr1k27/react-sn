import {NavLink} from "react-router-dom";
import s from './Dialog.module.css';

const Dialog = (props) => {

    let path = "/messenger/" + props.id;

    return (
        <div className={s.dialog}>
            <div className={s.friendAva}>
                <img alt={'friendAva'} src={'https://i.pinimg.com/originals/e3/63/16/e36316cfd05ca21e44d8fabcf1a192be.jpg'}/>
            </div>
            <div className={s.friendName}>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>

        </div>
    )
}

export default Dialog;

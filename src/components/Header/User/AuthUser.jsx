import {reduxForm} from "redux-form";
import s from './AuthUser.module.css'


const UserSignOutForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <button>SignOut</button>
        </form>
    )
}

const UserSignOutReduxForm = reduxForm({form: 'signOut'})(UserSignOutForm);

const AuthUser = (props) => {
    let signOut = () => {
        props.signOut();
    }


    return (
        <div className={s.authUserBlock}>
            <span className={s.login}>{props.login}</span>
            <UserSignOutReduxForm onSubmit={signOut}/>
        </div>
    )
}

export default AuthUser;
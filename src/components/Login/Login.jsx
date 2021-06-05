import {Field, reduxForm} from "redux-form";
import {signIn} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field name={'email'} component={'input'} placeholder={'email'}/></div>
                <div><Field name={'password'} component={'input'} placeholder={'password'}/></div>
                <div><Field name={'rememberMe'} component={'input'} type={'checkbox'}/>remember me</div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'signIn'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.signIn(formData.email, formData.password, formData.rememberMe)

    }

    if (props.isAuthUser) {
        return <Redirect to={'/profile'}/>
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthUser: state.auth.isAuthUser,
})


export default connect(mapStateToProps, {signIn})(Login);
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field name={'login'} component={'input'} placeholder={'login'}/></div>
                <div><Field name={'password'} component={'input'} placeholder={'password'} /></div>
                <div><Field name={'rememberMe'} component={'input'} type={'checkbox'} />remember me</div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'signIn'})(LoginForm);

const Login = () => {

    const onSubmit = (props) => {
        console.log(props);
    }

    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;
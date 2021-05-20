import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field name={'newMessage'} component={'textarea'} placeholder={'Enter new message'}/>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessageForm'})(AddMessageForm)

const Messages = (props) => {

    let messageItems = props.messages.map(m => <Message id={m.id} message={m.message}/>)
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessage)
    }

    return (
        <div className={s.messages}>
            <div className={s.messageItems}>
                {messageItems}
            </div>
            <div className={s.textField}>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Messages;
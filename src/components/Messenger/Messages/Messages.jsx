import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";

const Messages = (props) => {

    let messageItems = props.messages.map(m => <Message id={m.id} message={m.message} />)

    let reference = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let updateNewMessageText = () => {
        let text = reference.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.messages}>
            <div className={s.messageItems}>
                {messageItems}
            </div>
            <div className={s.textField}>
                <textarea onChange={updateNewMessageText} value={props.text} ref={reference} />
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages;
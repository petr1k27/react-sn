import s from './Messenger.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Messenger = () => {
    return (
        <div className={s.messenger}>
            <div className={s.dialogs}>
                <DialogsContainer />
            </div>
            <div className={s.messages}>
                <MessagesContainer />
            </div>
        </div>
    )
}

export default Messenger;
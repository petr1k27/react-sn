import {connect} from "react-redux";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/messenger-reducer";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return(
        {
            messages: state.messengerPage.messages,
            text: state.messengerPage.text,
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return(
        {
            sendMessage: () => {
                dispatch(sendMessageActionCreator())
            },
            updateNewMessageText: (text) => {
                dispatch(updateNewMessageTextActionCreator(text))
            },
        }
    )
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
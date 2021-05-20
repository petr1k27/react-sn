import {connect} from "react-redux";
import {sendMessage} from "../../../redux/messenger-reducer";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return(
        {
            messages: state.messengerPage.messages,
            text: state.messengerPage.text,
        }
    )
}

const MessagesContainer = connect(mapStateToProps, {sendMessage})(Messages);

export default MessagesContainer;
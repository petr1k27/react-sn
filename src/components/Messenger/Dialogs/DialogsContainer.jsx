import Dialog from './Dialog/Dialog'
import {connect} from "react-redux";

const Dialogs = (props) => {

    let dialogItems = props.dialogs.map( d => <Dialog id={d.id} name={d.name}/>);

    return (
        <div>
            { dialogItems }
        </div>
    )
}
let mapStateToProps = (state) => {
    return (
        {
            dialogs: state.messengerPage.dialogs,
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return (
        {

        }
    )
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
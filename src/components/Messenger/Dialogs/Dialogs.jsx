
import Dialog from './Dialog/Dialog'

const Dialogs = (props) => {

    let dialogItems = props.dialogs.map( d => <Dialog id={d.id} name={d.name}/>);

    return (
        <div>
            { dialogItems }
        </div>
    )
}

export default Dialogs;
import s from './FormsControls.module.css'

const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea  {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export default Textarea;
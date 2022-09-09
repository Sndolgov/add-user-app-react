import styles from './InputFieled.module.css'

const InputField = (props) => {
    return (
        <div className={`${styles['input-form']}`}>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                id={props.label}
                type={props.type}
                value={props.value}
                onChange={props.onChangeHandler}
                ref={props.forwardedRef}
            />
        </div>
    )
}

export default InputField
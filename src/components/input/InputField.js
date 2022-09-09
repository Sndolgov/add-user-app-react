import styles from './InputFieled.module.css'
import {useState} from "react";

const InputField = (props) => {
    return (
        <div className={`${styles['input-form']}`}>
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} type={props.type} value={props.value} onChange={props.onChangeHandler}/>
        </div>
    )
}

export default InputField
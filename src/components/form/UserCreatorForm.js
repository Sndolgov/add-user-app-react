import styles from './UserCreatorForm.module.css'
import InputField from "../input/InputField";
import Button from '../button/Button'
import {useRef, useState} from "react";
import ModalWindow from "../modal/ModalWindow";

const validation = {
    name: (name) => {
        if (!name){
            return "Name can't be empty"
        }
        if (name.length < 4) {
            return "Name length must be > 3"
        }
        return ""
    },
    age: (age) => {
        if (!age){
            return "Age can't be empty"
        }
        if (age < 0) {
            return "Age must be >= 0"
        }
        if (age >= 150) {
            return "Age must be < 150"
        }
        return ""
    }
}


const UserCreatorForm = (props) => {
    // const [name, setName] = useState("")
    // const [age, setAge] = useState("")
    const [errorVisible, setErrorVisible] = useState(false)
    const [errors, setErrors] = useState([])

    const nameRef = useRef()
    const ageRef = useRef()

    const onAddNewUser = (event) => {
        event.preventDefault();
        const inputName = nameRef.current.value
        const inputAge = ageRef.current.value
        const errorArrs = hasInvalidErrors(inputAge, inputName)

        if (errorArrs.length !== 0) {
            setErrorVisible(true)
            setErrors(errorArrs)
        } else {
            props.onCrateUserHandler({name: inputName, age: inputAge})
            // setName("")
            // setAge("")
            nameRef.current.value = ""
            ageRef.current.value = ""
        }
    }

    const hasInvalidErrors = (age, name) => {
        let error = []
        const nameValidation = validation['name'](name);
        if (nameValidation.length !== 0) {
            error.push(nameValidation)
        }
        const ageValidation = validation['age'](age);
        if (ageValidation.length !== 0) {
            error.push(ageValidation)
        }
        return error
    }

    // const onChangeNameHandler = (event) => {
    //     setName(event.target.value)
    // }
    // const onChangeAgeHandler = (event) => {
    //     setAge(event.target.value)
    // }

    // const isButtonDisabled = () => {
    //     return name.trim().length === 0
    //         || age.length === 0
    // }

    return (
        // <Wrapper>
        <>
            <form className={`${styles['user-form']}`}>
                <div className={`${styles['form-fields']}`}>
                    {/*<InputField label={'Name'} type='text' value={name} onChangeHandler={onChangeNameHandler}/>*/}
                    {/*<InputField label={'Age'} type='number' value={age} onChangeHandler={onChangeAgeHandler}/>*/}
                    <InputField label={'Name'} type='text' forwardedRef={nameRef}/>
                    <InputField label={'Age'} type='number' forwardedRef={ageRef}/>
                    <Button type='submit' onClick={onAddNewUser} label={'Add'}/>
                </div>
            </form>
            <ModalWindow
                show={errorVisible}
                onClose={() => setErrorVisible(false)}
                title='Wrong value'
                text={errors}
            />
        </>
        // </Wrapper>
    )
}

export default UserCreatorForm


import styles from './UserCreatorForm.module.css'
import InputField from "../input/InputField";
import Button from '../button/Button'
import {useState} from "react";
import ModalWindow from "../modal/ModalWindow";
import Wrapper from "../helpers/Wrapper";

const validation = {
    // age: "Age must be >= 0"
    age: (age) => {
        if (age < 0){
            return "Age must be >= 0"
        } else if (age >= 150){
            return "Age must be < 150"
        }
        return ""
    },
    name: (name) => {
        if (name.length < 4){
            return "Name length must be > 3"
        }
        return ""
    }
}


const UserCreatorForm = (props) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [errorVisible, setErrorVisible] = useState(false)
    const [errors, setErrors] = useState([])

    const onAddNewUser = (event) => {
        event.preventDefault();
        const errorArrs = hasInvalidErrors()

        if (errorArrs.length !== 0) {
            setErrorVisible(true)
            setErrors(errorArrs)
        } else {
            props.onCrateUserHandler({name: name, age: age})
            setName("")
            setAge("")
        }
    }

    const hasInvalidErrors = () => {
        let error = []
        const ageValidation = validation['age'](age);
        if (ageValidation.length !== 0) {
            // console.log('validation[age]: ' + validation['age'])
            error.push(ageValidation)
        }
        const nameValidation = validation['name'](name);
        if (nameValidation.length !== 0) {
            // console.log('validation[age]: ' + validation['age'])
            error.push(nameValidation)
        }
        return error
    }

    const onChangeNameHandler = (event) => {
        setName(event.target.value)
    }
    const onChangeAgeHandler = (event) => {
        setAge(event.target.value)
    }

    const isButtonDisabled = () => {
        return name.trim().length === 0
            || age.length === 0
    }

    return (
        <Wrapper>
            <form className={`${styles['user-form']}`}>
                <div className={`${styles['form-fields']}`}>
                    <InputField label={'Name'} type='text' value={name} onChangeHandler={onChangeNameHandler}/>
                    <InputField label={'Age'} type='number' value={age} onChangeHandler={onChangeAgeHandler}/>
                    <Button type='submit' onClick={onAddNewUser} label={'Add'} isDisabled={isButtonDisabled()}/>
                </div>
            </form>
            <ModalWindow
                show={errorVisible}
                onClose={() => setErrorVisible(false)}
                title='Wrong value'
                text={errors}
            />
        </Wrapper>
    )
}

export default UserCreatorForm


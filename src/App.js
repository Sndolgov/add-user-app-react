import UserCreatorForm from "./components/form/UserCreatorForm";
import UserList from './components/list/UserList'
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalWindow from "./components/modal/ModalWindow";


const data = [
    {id: '1', name: "Name1", age: 19},
    {id: '2', name: "Name2", age: 29}
]

function App() {
    const [users, setUsers] = useState(data)
    const [id, setId] = useState(3)

    const onCrateUserHandler = (user) => {
        setUsers(prevState => {
            const newUser = {id:id.toString(), ...user}
            setId(prevId => ++prevId)
            return [newUser, ...prevState]
        })
    }

    const onDeleteUser = (id) => {
        setUsers(prevState => {
            return prevState.filter(user => user.id !== id)
        })
    }

    return (
        <>
            <UserCreatorForm onCrateUserHandler={onCrateUserHandler}/>
            <UserList users={users} onDeleteUser={onDeleteUser}/>
        </>
    );
}

export default App;

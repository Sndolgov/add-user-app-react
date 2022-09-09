import './UserItem.css'
import {XLg} from "react-bootstrap-icons";
import {useState} from "react";


const UserItem = (props) => {
    const getUserData = () => {
        return `${props.user.name} - ${props.user.age}`;
    }

    return (
        <li className='user-item'>
            <span className="text">{getUserData() + ' years old'}</span>
            <div className='icon' onClick={() => props.onDeleteUser(props.user.id)}>
                <XLg/>
            </div>
        </li>
    )
}


export default UserItem
import './UserList.css'
import UserItem from "../item/UserItem";

const UserList = (props) => {
    return (
        <ul className={'user-list'}>
            {props.users.map(user => {
                return <UserItem key={user.id} user={user} onDeleteUser={props.onDeleteUser}/>
            })}
        </ul>
    )
}

export default UserList
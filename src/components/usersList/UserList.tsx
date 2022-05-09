
// import { useGetUsersQuery } from "../../store/reducers/User/UsersSlice"
import { useEffect } from "react";
import { IUser } from "../../store/reducers/User/usersType"
import { getUsers} from "../../store/reducers/User/UsersSlice";
import User from "./User/User"
import './UserList.scss';
import { useAppDispatch, useAppSelector } from "../../hook/redux";

const UserList = () => {
  const dispatch=useAppDispatch();

    useEffect(() => {
      dispatch(getUsers())
    }, [])
      
      const {users, error,isLoading} = useAppSelector(state => state.user)

  return (
    <div className="UserList">
      <h2 className="title" >Список пользователей</h2>
      {isLoading ? (
        'Loading...' 
        ) : error ? (
        <div> error </div>
        ):(   
          users?.map((users:IUser)=>(
          <User key={users.id} id={users.id}name={users.name} address={users.address.city} company={users.company.name}/>)
          )
        )} 
        <h2 className="UserList__titleEnd" >{`Найдено ${users?.length} пользователей`}</h2>
    </div>
  )
}

export default UserList
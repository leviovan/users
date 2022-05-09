import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../hook/redux";
import { setUser } from "../../../store/reducers/User/UsersSlice";

import './User.scss';


const User = ({ name, address, company,id }:any) => {

  const dispatch=useAppDispatch();
  const navigate =useNavigate()
  
  const setUserProfile=(id:number)=>{
    dispatch(setUser(id))
    navigate(`../${id}`, { replace: false  })

  }
  return (
    <div className="user">
      <div className="user__items">
        <p className="user__text" ><span>ФИО:</span>{name}</p>
        <p className="user__text"><span>Город:</span>{address}</p>
        <p className="user__text"><span>Компания:</span>{company}</p>
      </div>
      <div className="user__about" >
        <p onClick={()=>setUserProfile(id)} className="user__text about" > Подробнее</p>
      </div>
    </div>
  )
}

export default User
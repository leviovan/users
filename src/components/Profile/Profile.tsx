
import { SyntheticEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { string } from 'yup';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { toogleEdit } from '../../store/reducers/User/UsersSlice';
import { IUser } from '../../store/reducers/User/usersType';
import Btn from '../Button/Btn';

import './Profile.scss';

const Profile = () => {

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const dispatch = useAppDispatch();
  
  useEffect(() => {  
    return () => {
      dispatch(toogleEdit(true))
    }
  }, [])
  
  const onSubmit = (data: any) => {
    console.log(data)
  }
  
  const { editProofile, activeUser, users } = useAppSelector(state => state.user)

  const user: IUser[] = users.filter((user) => user.id === activeUser)

  const ProfileData = [
  { 'title': 'Name', 'data':user[0].name},
  { 'title': 'User name', 'data':user[0].username},
  { 'title': 'E-mail', 'data':user[0].email},
  { 'title': 'City', 'data':user[0].address.city},
  { 'title': 'Street', 'data':user[0].address.street},
  { 'title': 'Zip code', 'data':user[0].address.zipcode},
  { 'title': 'Phone', 'data':user[0].phone},
  { 'title': 'Website', 'data':user[0].website},
  ]

  const [data, setData] = useState(ProfileData);

  const updateFieldChanged = (index:number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let newArr = [...data]; 
    newArr[index].data = e.currentTarget.value; 
    setData(newArr);
  } 

  return (
    <div className='profile'>
      <div className="profile__header">
        <h3 className='title'>Профиль пользоваетля</h3>
        <Btn color="blue" callback={() => dispatch(toogleEdit(!editProofile))} text='Редактироввать' ></Btn>
      </div>
      <div className="profile__body">
        <form className="profile__form "  onSubmit={handleSubmit(onSubmit)} >
          <div className="profile__container">
            {ProfileData?.map((a: any, index: number) => (
              <>
                <h4 className="profile__titleItems">{a.title}</h4>
                <input 
                  key={`inputField_${index}`}
                  {...register(`${a.title}`, {
                    required: `${a.title} is requare Field`,
                    value:data[index].data
                  })}
                  className={errors[`${a.title}`] ? "profile__input redBorder" : "profile__input"}
                  disabled={editProofile}
                  value={data[index].data}
                  onChange={updateFieldChanged(index)}
                />     
              </>
              ))
            }
            <h4 className="profile__titleItems">Comment</h4>
            <textarea 
               
                  {...register(`coment`, {
                    value:''
                  })}
                  className={"profile__input profile__textarea"}
                  disabled={editProofile}
                />     
                
          </div>
              <button disabled={editProofile} className='profile__submit' onClick={onSubmit}>Отправить</button>      
           {/* <Btn callback={onSubmit} color='green' text='Отправить' /> */}
        </form>
      </div>
    </div>
  )
}
export default Profile
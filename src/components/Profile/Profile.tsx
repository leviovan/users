
import { useState } from 'react';
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

  const onSubmit = (data: any) => {
    console.log(data)

  }

  const { editProofile, activeUser, users } = useAppSelector(state => state.user)

  const user: IUser[] = users.filter((user) => user.id === activeUser)



  const ProfileData = [
  { 'Name': user[0].name },
  { 'User name': user[0].username },
  { 'E-mail': user[0].email },
  { 'City': user[0].address.city, },
  { 'Street': user[0].address.street },
  { 'Zip code': user[0].address.zipcode },
  { 'Phone': user[0].phone },
  { 'Website': user[0].website },
  ]

  const [data, setData] = useState(ProfileData);
 
  return (
    <div className='profile'>
      <div className="profile__header">
        <h3 className='title'>Профиль пользоваетля</h3>
        <Btn callback={() => dispatch(toogleEdit())} text='Редактироввать' ></Btn>
      </div>

      <div className="profile__body">
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="profile__container">

            {ProfileData?.map((a: any, index: number) => (
              <>
                <h4 className="profile__titleItems">{`${Object.keys(a)}`}</h4>
                <input {
                  ...register(`${Object.keys(a)}`, {
                    required: `${Object.keys(a)} is requare Field`
                  })}
                  className={errors[`${Object.keys(a)}`] ? "profile__input redBorder" : "profile__input"}
                  disabled={editProofile}
                  value={data[index].Name}
                  onChange={(e) => setData(data.map((object: any) => {
                      
                    let keys =`${Object.keys(a)}`
                    console.log(e.target.value);
                    
                    if (`${Object.keys(object)}` === `${Object.keys(a)}`) {
                      console.log(`${Object.keys(object)}`);
                      return {
                        ...object,
                        Name: e.currentTarget.value,

                      };
                    }
                    else return object
                  }))}
                />
              </>
            )
            )
            }
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}
export default Profile
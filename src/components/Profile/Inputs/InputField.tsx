import { FC } from "react"
import { Ref } from "react-hook-form";
import { IUser } from "../../../store/reducers/User/usersType";

interface IInputField {
  errors: any,
  editProofile: boolean

}

const InputField: FC<IInputField> = ({ errors, editProofile,...register  }) => {
   
  return (
    <div>
             
    </div>
  )
}
export default InputField
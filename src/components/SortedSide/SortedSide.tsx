
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../hook/redux";
import { sortedByAddress, sortedByCompany } from "../../store/reducers/User/UsersSlice";
import Btn from "../Button/Btn"
import './SortedSide.scss';

const  SortedSide=()=> {
 
  const dispatch=useAppDispatch()

  return (
    <div className="sort">
        <h3 className="sort__title">Сортировка</h3>

        <Btn color="blue" callback={() => dispatch(sortedByAddress())}text="по городу" />
        
        <Btn color="blue" callback={() => dispatch(sortedByCompany())} text="по компании" />
    </div>
  )
}

export default SortedSide

import { FC } from 'react';
import './Btn.scss';

const Btn: FC<{ color:string,
                text: string, 
                callback: Function }> = ({ text, callback,color }) => {
  return (
    <button style={{background:color}} onClick={() => callback()} type="button" className="btn"> {text}</button>
  )
}
export default Btn;

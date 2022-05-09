
import { FC } from 'react';
import './Btn.scss';

const Btn: FC<{ text: string, 
                callback: Function }> = ({ text, callback }) => {
  return (
    <button onClick={() => callback()} type="button" className="btn"> {text}</button>
  )
}
export default Btn;

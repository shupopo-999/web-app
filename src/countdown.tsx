import React,{ useState } from 'react';
import { useCountDownInterval } from './useCountDownInterval';

type CountdownProps = {
  time: number;
};

const Countdown:React.FC<CountdownProps>  = ({time}) => {
  const [countTime, setCountTime] = useState<number>(time)

  const handleTimeUp = () =>{
    alert("TimeUp");
  }

  useCountDownInterval(countTime, setCountTime, handleTimeUp)

  return (
    <p>制限時間: {Math.floor(countTime / 60)}分{countTime % 60}秒 </p>
  )
}
export default Countdown;
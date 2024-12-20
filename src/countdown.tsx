import React,{ useState, useEffect } from 'react';
import { useCountDownInterval } from './useCountDownInterval';

type CountdownProps = {
  time: number;
};

const Countdown:React.FC<CountdownProps>  = ({time}) => {
  const [countTime, setCountTime] = useState<number>(time)
  const [progress, setProgress] = useState<number>(100); // 進行状況の割合 (0-100)

  const handleTimeUp = () =>{
    alert("TimeUp");
  }

  useEffect(() => {
    setProgress((countTime / time) * 100); // 残り時間に基づいて進行状況を計算
  }, [countTime, time]);

  useCountDownInterval(countTime, setCountTime, handleTimeUp)

  return (
    <div>
      <p>
        制限時間: {Math.floor(countTime / 60)}分{countTime % 60}秒
      </p>
      <div style={{ width: '100%', backgroundColor: '#eee', height: '20px', borderRadius: '10px' }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: progress > 10 ? '#4caf50' : '#f44336', // 進行状況によって色を変える
            height: '100%',
            borderRadius: '10px',
            transition: 'width 0.5s ease',
          }}
        ></div>
      </div>
    </div>
  )
}
export default Countdown;
import React, { useEffect, useState } from 'react';
import { useCountDownInterval } from './useCountDownInterval';

type CountdownProps = {
  time: number;
  onTimeUp: () => void;
};

const Countdown: React.FC<CountdownProps> = React.memo(({ time, onTimeUp }) => {
  const timeRef = useCountDownInterval(time, onTimeUp);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((timeRef.current / time) * 100);
    };
    const interval = setInterval(updateProgress, 500);
    return () => clearInterval(interval);
  }, [time, timeRef]);

  return (
    <div>
      <p>制限時間: {timeRef.current}秒</p>
      <div style={{ width: '100%', backgroundColor: '#eee', height: '20px', borderRadius: '10px' }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: progress > 10 ? '#4caf50' : '#f44336',
            height: '100%',
            borderRadius: '10px',
            transition: 'width 0.5s ease',
          }}
        ></div>
      </div>
    </div>
  );
});

export default Countdown;
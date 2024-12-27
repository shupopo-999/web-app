import { useEffect, useRef } from 'react';

const useCountDownInterval = (
  initialTime: number, 
  onTimeUp: () => void 
) => {
  const timeRef = useRef(initialTime); 
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      if (timeRef.current === 0) {
        if (intervalRef.current !== null) clearInterval(intervalRef.current);
        onTimeUp(); 
      } else {
        timeRef.current -= 1; 
      }
    };

    intervalRef.current = window.setInterval(tick, 1000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [onTimeUp]); 

  return timeRef;
};

export { useCountDownInterval };
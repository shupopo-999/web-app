import React from 'react';
import { useState } from 'react';
import { useCountDownInterval } from './useCountDownInterval';

const Countdown  = () => {
  const [countTime, setCountTime] = useState<number>(180)
  useCountDownInterval(countTime, setCountTime)
    return (
      <p>制限時間: {Math.floor(countTime / 60)}分{countTime % 60}秒 </p>
    )
}
export default Countdown;
import React from 'react';
import { useState } from 'react';
import { useCountDownInterval } from './useCountDownInterval';

const Countdown  = (num:any) => {
  const [countTime, setCountTime] = useState<number>(num)
  useCountDownInterval(countTime, setCountTime)
    return (
      <p>制限時間: {Math.floor(countTime / 60)}分{countTime % 60}秒 </p>
    )
}
export default Countdown;
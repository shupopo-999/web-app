import React from 'react';
import { useState } from 'react';
import { useCountDownInterval } from '@/component/useCountDownInterval';

const Countdown  = () => {
  const [countTime, setCountTime] = useState<number>(180)
  useCountDownInterval(countTime, setCountTime)
    return (
      <p>ゲーム残り時間: {Math.floor(countTime / 60)}分{countTime % 60}秒 </p>
    )
}
export default Countdown;
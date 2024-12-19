import { useEffect } from 'react'

const useCountDownInterval = (
  countTime: number | null,
  setCountTime: (arg0: number) => void,
  onTimeUp: () => void, // 時間切れ時のコールバック
) => {
  useEffect(() => {
    const countDownInterval = setInterval(() => {
      if (countTime === 0) {
        clearInterval(countDownInterval)
        onTimeUp();
        return;
      }
      if (countTime && countTime > 0) {
        setCountTime(countTime - 1)
      }
    }, 1000)
    return () => {
      clearInterval(countDownInterval)
    }
  }, [countTime,onTimeUp,setCountTime])
}

export { useCountDownInterval }
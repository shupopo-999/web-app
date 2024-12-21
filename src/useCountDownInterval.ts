import { useEffect, useRef } from 'react';

const useCountDownInterval = (
  initialTime: number, // 初期のカウントダウン時間
  onTimeUp: () => void // 時間切れ時のコールバック
) => {
  const timeRef = useRef(initialTime); // 現在のカウントダウン時間
  const intervalRef = useRef<number | null>(null); // タイマーIDを保存する

  useEffect(() => {
    const tick = () => {
      if (timeRef.current === 0) {
        if (intervalRef.current !== null) clearInterval(intervalRef.current);
        onTimeUp(); // 時間切れコールバック
      } else {
        timeRef.current -= 1; // 時間を減らす
      }
    };

    intervalRef.current = window.setInterval(tick, 1000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [onTimeUp]); // onTimeUpが変更された場合も対応

  // 現在の残り時間を返す
  return timeRef;
};

export { useCountDownInterval };
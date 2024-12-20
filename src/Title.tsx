import React from 'react';
import { useNavigate } from 'react-router-dom';

type TitleProps = {
  setTimeIndex: (time: number) => void;
};

export const Title: React.FC<TitleProps> = ({ setTimeIndex }) => {
  const navigate = useNavigate();

  const handleTimeSelect = (time: number) => {
    setTimeIndex(time);
    navigate('/quiz'); // クイズ画面に遷移
  };

  return (
    <div className="title">
      <h1>クイズアプリ</h1>
      <p>以下から制限時間を選択してください</p>
      <div className="time-buttons">
        <button onClick={() => handleTimeSelect(60)}>1分</button>
        <button onClick={() => handleTimeSelect(120)}>2分</button>
        <button onClick={() => handleTimeSelect(300)}>5分</button>
      </div>
    </div>
  );
};
import React, { useEffect, useState } from 'react';

type ResultProps = {
  score: number;
};

export const Result: React.FC<ResultProps> = () => {
  const [score, setScore] = useState<number>(0);
  
  useEffect(() => {
    const savedScore = localStorage.getItem('quizScore');
    if (savedScore) {
      setScore(Number(savedScore));
    }
  }, []);

  const handleNavigate = (path: string) => {
    if (path === '/') {
      localStorage.removeItem('quizTime');
      localStorage.removeItem('quizScore');
    }
    window.location.href = path;
  };

  const handleReplay = () => {
    localStorage.removeItem('quizScore'); // スコアをリセット
    setScore(0); // スコアを0に初期化
    window.location.href = '/quiz'; // クイズページに遷移
  };

  return (
    <div className="result gradient-background">
      <p>
        <h1>結果発表</h1>
        <p>スコア: {score} 点</p>
        <button className="text-margin-left" onClick={() => handleNavigate('/')}>タイトルに戻る</button>
        <button className="text-margin-left" onClick={handleReplay}>リプレイ</button>
      </p>
    </div>
  );
};
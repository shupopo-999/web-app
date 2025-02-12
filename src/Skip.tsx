import React from "react";
import { useNavigate } from "react-router-dom";

interface SkipProps {
  answerExample: string | null;
  updateQuiz: () => void;
  setAnswerExample: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Skip: React.FC<SkipProps> = ({answerExample, updateQuiz, setAnswerExample
}) => {
  const navigate = useNavigate();

  const handleNext = () => {
    updateQuiz(); // 次の問題に更新
    setAnswerExample(null); // 解答例リセット
    navigate("/quiz"); // クイズ画面に戻る
  };

  return (
    <div className="skip-scene">
      <h1>スキップしました</h1>
      {answerExample && <p>解答例: {answerExample}</p>}
      <button onClick={handleNext}>次へ</button>
    </div>
  );
};
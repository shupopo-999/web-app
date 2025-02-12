import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Difficulty: React.FC = () => {
    const navigate = useNavigate();
    const handleDifficultySelect = (difficulty: string) => {
        localStorage.setItem('quizDifficulty', difficulty);
        navigate('/time_pick');
    }
  return (
    <div  className="title gradient-background">
        <h1>難易度選択</h1>
        <div className='time-buttons'>
            <button className="text-margin-left text-margin-top" onClick={() => handleDifficultySelect('Easy')}>Easy</button>
            <button className="text-margin-left text-margin-top" onClick={() => handleDifficultySelect('Normal')}>Normal</button>
            <button className="text-margin-left text-margin-top" onClick={() => handleDifficultySelect('Hard')}>Hard</button>
            <button className="text-margin-left text-margin-top" onClick={() => handleDifficultySelect('Random')}>Random</button>
        </div>
    </div>
  )
}
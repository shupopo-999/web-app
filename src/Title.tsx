import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Title = () => {
    const navigate = useNavigate();

    const handleAction = () => {
        navigate('/difficulty'); // difficulty画面へ遷移
    };

    return (
        <div 
            className="title gradient-background"
            tabIndex={0} 
            onClick={handleAction} 
            onKeyDown={(e) => { if (e.key === 'Enter') handleAction(); }} 
            style={{ cursor: 'pointer' }}
        >
            <h1>
                English Typing<br/>
            </h1>
            <p>(画面クリックで開始)</p>
        </div>
    );
};
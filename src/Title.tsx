import React from 'react';

type TitleProps = {
    setTimeIndex: (time: number) => void;
};

export const Title: React.FC<TitleProps> = ({ setTimeIndex }) => {

    const handleTimeSelect = (time: number) => {
        setTimeIndex(time);
        localStorage.setItem('quizTime', time.toString());
        window.location.href = '/quiz';
    };

    return (
        <div className="title gradient-background">
            <p>
                <h1>Type EN</h1>
                <p>以下から制限時間を選択してください</p>
                <div className="time-buttons">
                    <button className="text-margin-left" onClick={() => handleTimeSelect(3)}>30秒</button>
                    <button className="text-margin-left" onClick={() => handleTimeSelect(6)}>60秒</button>
                    <button className="text-margin-left" onClick={() => handleTimeSelect(10)}>120秒</button>
                </div>
            </p>
        </div>
    );
};
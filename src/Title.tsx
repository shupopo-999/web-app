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
                    <button className="text-margin-left text-margin-top" onClick={() => handleTimeSelect(30)}>30秒</button>
                    <button className="text-margin-left text-margin-top" onClick={() => handleTimeSelect(60)}>60秒</button>
                    <button className="text-margin-left text-margin-top" onClick={() => handleTimeSelect(120)}>120秒</button>
                    <br/>
                    <button className="text-margin-left text-margin-top" onClick={() => handleTimeSelect(150)}>150秒</button>
                    <button className="text-margin-left text-margin-top" onClick={() => handleTimeSelect(200)}>200秒</button>
                </div>
            </p>
        </div>
    );
};
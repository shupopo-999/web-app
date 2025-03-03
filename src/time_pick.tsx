import React from 'react'

type TimeProps = {
    setTimeIndex: (time: number) => void;
};

export const TimePick: React.FC<TimeProps> = ({ setTimeIndex }) => {

    const handleTimeSelect = (time: number) => {
        setTimeIndex(time);
        localStorage.setItem('quizTime', time.toString());
        window.location.href = '/quiz';
    };

    return (
        <div className="title gradient-background">
            <p>
                <h1>制限時間を選択</h1>
                <div className="time-buttons">
                    <button className="button text-margin-left text-margin-top" onClick={() => handleTimeSelect(30)}>30秒</button>
                    <button className="button text-margin-left text-margin-top" onClick={() => handleTimeSelect(60)}>60秒</button>
                    <button className="button text-margin-left text-margin-top" onClick={() => handleTimeSelect(120)}>120秒</button>
                    <br/>
                    <button className="button text-margin-left text-margin-top" onClick={() => handleTimeSelect(150)}>150秒</button>
                    <button className="button text-margin-left text-margin-top" onClick={() => handleTimeSelect(200)}>200秒</button>
                </div>
            </p>
        </div>
    );
};
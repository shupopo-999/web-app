import './App.css';
import React,{ useState, useEffect } from 'react';
import Countdown from './countdown';
import Quiz from './quiz.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Result } from './Result';
import { Title } from './Title';

function App() {  
  const [inputValue, setInputValue] = useState("");
  const [quizIndex,setQuizIndex] = useState(Math.floor(Math.random() * Quiz.quiz.length));
  const [result, setResult] = useState("");
  const [timeIndex,setTimeIndex] = useState<number | undefined>(undefined);
  const [score, setScore] = useState(0);
  const [answerExample, setAnswerExample] = useState<string | null>(null);


  useEffect(() => {
    const savedTime = localStorage.getItem('quizTime');
    if (savedTime) {
      setTimeIndex(Number(savedTime));
    }
  }, []);
    
  const judgment = () =>{
    if(Quiz.quiz[quizIndex].ansewer.includes(inputValue)){
      setResult("正解");
      updateQuiz();
      const newScore = score + 10;
      setScore(newScore);
      localStorage.setItem('quizScore', newScore.toString());
    }else{
      setResult("不正解");
      const newScore = score - 3;
      setScore(newScore);
      localStorage.setItem('quizScore', newScore.toString());
    }
    setInputValue("");
  }

  const updateQuiz = () =>{
    let nextIndex;
    do{
      nextIndex = Math.floor((Math.random() * Quiz.quiz.length));
    }while(nextIndex === quizIndex);
    if(timeIndex !== 0){
      setQuizIndex(nextIndex);
    } 
    setAnswerExample(null);
  }

  const handleTimeUp = React.useCallback(() => {
    alert('時間切れです');
    window.location.href = '/Result';
  }, []);

  const handleSkip = () => {
    const randomAnswer = Quiz.quiz[quizIndex].ansewer[
      Math.floor(Math.random() * Quiz.quiz[quizIndex].ansewer.length)
    ];
    setAnswerExample(randomAnswer); 

    const newScore = score - 4;
    setScore(newScore);
    localStorage.setItem('quizScore', newScore.toString());

    setTimeout(() => {
      updateQuiz();
    }, 1500);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Title setTimeIndex={setTimeIndex} />}
        />
        <Route
          path="/quiz"
          element={
            <div className="App gradient-background">
              <p>
              <h1>
                  {timeIndex !== undefined && <Countdown time={timeIndex} onTimeUp={handleTimeUp} />}
                </h1>
                <p>{Quiz.quiz[quizIndex].explanation}</p>
                <h1>{Quiz.quiz[quizIndex].question}</h1>
                <ul>{result}</ul>
                <form 
                  className="text-margin-bottom"
                  onSubmit={(e) => {
                  e.preventDefault();
                  judgment();
                }}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="inputText"
                  />
                </form>
                <h2>
                  {answerExample && (
                  <p className="answer-example">
                    解答例: {answerExample}
                  </p>
                  )}
                </h2>
                <button
                  onClick={handleSkip}{...Quiz.quiz[quizIndex].ansewer}
                  disabled={score < 4} 
                >
                  スキップ (-4点)
                </button>
              </p>
            </div>
          }
        />
        <Route 
          path="/Result" 
          element={<Result score={ score }  />}
        />
      </Routes>
    </Router>
  );
}

export default App;
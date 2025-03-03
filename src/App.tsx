import './App.css';
import React,{ useState, useEffect } from 'react';
import Countdown from './countdown';
import Easy from './Quiz/easy_quiz.json';
import Normal from './Quiz/normal_quiz.json';
import Hard from './Quiz/hard_quiz.json';
import Quiz from './Quiz/quiz.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Result } from './Result';
import { TimePick } from './time_pick';
import Difficulty from './difficulty';
import { Title } from './Title';

function App() {  
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [timeIndex,setTimeIndex] = useState<number | undefined>(undefined);
  const [diffIndex,setDiffIndex] = useState<string | undefined>(undefined);
  const [score, setScore] = useState(0);
  const [answerExample, setAnswerExample] = useState<string | null>(null);
  const [currentQuizData, setCurrentQuizData] = useState(Quiz.quiz);
  const [quizIndex,setQuizIndex] = useState(0);


  useEffect(() => {
    const savedTime = localStorage.getItem('quizTime');
    if (savedTime) {
      setTimeIndex(Number(savedTime));
    }
    const savedDiff = localStorage.getItem('quizDifficulty');
    if(savedDiff){
      setDiffIndex(savedDiff);
    }
    switch(savedDiff) {
      case 'Easy':
        setCurrentQuizData(Easy.quiz);
        break;
      case 'Normal':
        setCurrentQuizData(Normal.quiz);
        break;
      case 'Hard':
        setCurrentQuizData(Hard.quiz);
        break;
      case 'Random':
        setCurrentQuizData(Quiz.quiz);
        break;
      default:
        setCurrentQuizData(Quiz.quiz);
    }
  }, []);
  
  const judgment = () =>{
    const currentQuiz = currentQuizData[quizIndex];
    if(currentQuiz.ansewer.includes(inputValue)){
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
      nextIndex = Math.floor((Math.random() * currentQuizData.length));
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
    const randomAnswer = currentQuizData[quizIndex].ansewer[
      Math.floor(Math.random() * currentQuizData[quizIndex].ansewer.length)
    ];
    setAnswerExample(randomAnswer); 

    const newScore = score;
    setScore(newScore);
    localStorage.setItem('quizScore', newScore.toString());

    setTimeout(() => {
      updateQuiz();
    }, 1500);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Title />}/>
        <Route path="/difficulty" element={<Difficulty />}/>
        <Route path="/time_pick" element={<TimePick setTimeIndex={setTimeIndex} />}/>
        <Route
          path="/quiz"
          element={
            <div className="App gradient-background">
              <p>
              <h1>
                  {timeIndex !== undefined && <Countdown time={timeIndex} onTimeUp={handleTimeUp} />}
                </h1>
                <p>{currentQuizData[quizIndex].explanation}</p>
                <h1>{currentQuizData[quizIndex].question}</h1>
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
                  onClick={handleSkip}
                >
                  スキップ
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
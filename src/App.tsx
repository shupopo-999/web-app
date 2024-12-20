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


  useEffect(() => {
    const savedTime = localStorage.getItem('quizTime');
    if (savedTime) {
      setTimeIndex(Number(savedTime));
    }
  }, []);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    judgment();
  }
  
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputValue(e.target.value);
  }

  const setExpl = () => {
    return Quiz.quiz[quizIndex].explanation;
  }
  const setQuiz = () => {
    return Quiz.quiz[quizIndex].question;
  }
    
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
  }

  const handleTimeUp = () =>{
    alert("時間切れです");
    window.location.href = "/Result";
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
                  {timeIndex !== undefined && <Countdown time={timeIndex} onTimeUp={handleTimeUp}/>}
                </h1>
                <p>{setExpl()}</p>
                <h1>{setQuiz()}</h1>
                <ul>{result}</ul>
                <form onSubmit={handlesubmit}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handlechange}
                    className="inputText"
                  />
                </form>
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
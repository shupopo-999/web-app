import './App.css';
import React,{ useState } from 'react';
import Countdown from './countdown';
import Quiz from './quiz.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Result} from './Result';
import { Title } from './Title';

function App() {  
  const [inputValue, setInputValue] = useState("");
  const [quizIndex,setQuizIndex] = useState(Math.floor(Math.random() * Quiz.quiz.length));
  const [result, setResult] = useState("");
  const [timeIndex,setTimeIndex] = useState(100);

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
    }else{
      setResult("不正解");
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
                  <Countdown time={timeIndex} />
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
        <Route path="/Result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
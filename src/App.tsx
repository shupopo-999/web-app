import './App.css';
import React,{ useState } from 'react';
import Countdown from './countdown';
import Quiz from './quiz.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Result} from './Result';

function App() {  
  const [inputValue, setInputValue] = useState("");
  const [quizIndex,setQuizIndex] = useState(Math.floor(Math.random() * Quiz.quiz.length));
  const [result, setResult] = useState("");
  const [timeInedx] = useState(100);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    judgment();
  }
  
  const handlechenge = (e: React.ChangeEvent<HTMLInputElement>) =>{
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
    if(timeInedx !== 0){
      setQuizIndex(nextIndex);
    } 
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <p>
                <h1>
                  <Countdown time={timeInedx} />
                </h1>
                <p>{setExpl()}</p>
                <h1>{setQuiz()}</h1>
                <ul>{result}</ul>
                <form onSubmit={handlesubmit}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handlechenge}
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
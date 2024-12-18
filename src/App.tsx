import React, { useState } from 'react';
import './App.css';
import  Countdown  from './countdown';

function App() {
  const [inputValue, setInputValue] = useState("");

  const quiz = [
    {
      question: "message",
      ansewer: ["メッセージ", "めっせーじ","messe-ji","messe-zi","伝言","でんごん","denngonn","dengon"]
    },
    {
      question: "apple",
      ansewer: ["りんご", "リンゴ","rinngo","ringo"]
    },
    {
      question: "consensus",
      ansewer: ["コンセンサス", "こんせんさす", "konsensasu","konnsennsasu","一致","いっち","itti", "合意","ごうい","goui"]
    },
    {
      question: "spark",
      ansewer: ["火花","ひばな","hibana","きらめき","kiramenki"]
    }
  ]

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
  }

  const handlechenge = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputValue(e.target.value);
  }

  const listItems = quiz.map((quizIndex) =>
    <li>{quizIndex.question}</li>
  );

  return (
    <div className="App">
      <h3>
        <Countdown />
        <h2 className="text"></h2>
        <ul>{listItems}</ul>
        <form onSubmit={(e) => handlesubmit(e)} > 
          <input type="text" onChange={(e) => handlechenge(e)} className="inputText"/>
        </form>
      </h3>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Countdown from './countdown';

function App() {
    const quiz = [
    {
      id: 1,
      question: "message",
      ansewer: ["メッセージ", "めっせーじ","messe-ji","messe-zi","伝言","でんごん","denngonn","dengon"]
    },
    {
      id: 2,
      question: "apple",
      ansewer: ["りんご", "リンゴ","rinngo","ringo"]
    },
    {
      id: 3,
      question: "consensus",
      ansewer: ["コンセンサス", "こんせんさす", "konsensasu","konnsennsasu","一致","いっち","itti", "合意","ごうい","goui"]
    },
    {
      id: 4,
      question: "spark",
      ansewer: ["火花","ひばな","hibana","きらめき","kiramenki"]
    },
    {
      id: 5,
      question: "speak",
      ansewer: ["話す","はなす","hanasu","しゃべる","shaberu"]
    },
    {
      id: 6,
      question: "success",
      ansewer: ["成功","せいこう","seikou"]
    },
    {
      id: 7,
      question: "decay",
      ansewer: ["腐る","くさる","kusaru"]
    },
    {
      id: 8,
      question: "作る",
      ansewer: ["make up","Make Up","make","Make"]
    },
    {
      id: 9,
      question: "破壊",
      ansewer: ["break","Break","destruction","やぶる","yaburu"]
    },
    {
      id: 10,
      question: "虚数",
      ansewer: ["imaginary part","Imaginary Part"]
    },
    {
      id: 11,
      question: "価格",
      ansewer: ["Price","price","Prices","prices","Value","value"]
    },
    {
      id: 12,
      question: "体験する",
      ansewer: ["Experience it","experience it"]
    },
    {
      id: 13,
      question: "説明",
      ansewer: ["Description","explanation","Explanation"]
    }
  ];
  
  const [inputValue, setInputValue] = useState("");
  const [quizIndex,setQuizIndex] = useState(Math.floor(Math.random() * quiz.length));
  const [result, setResult] = useState("");
  const [timeInedx,setTime] = useState(60);

  

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    judgment();
  }
  
  const handlechenge = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputValue(e.target.value);
  }

  const setQuiz = () => {
    return quiz[quizIndex].question;
  }
    
  const judgment = () =>{
    if(quiz[quizIndex].ansewer.includes(inputValue)){
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
      nextIndex = Math.floor((Math.random() * quiz.length));
    }while(nextIndex === quizIndex);
    if(timeInedx !== 0){
      setQuizIndex(nextIndex);
    } 
  }

  return (
    <div className="App">
      <h3>
        <Countdown time={timeInedx}/>
        <h2>{setQuiz()}</h2>
        <ul>{result}</ul>
        <form onSubmit={(e) => handlesubmit(e)} > 
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handlechenge(e)}
            className="inputText"
          />
        </form>
      </h3>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import  Countdown  from '@/component/countdown';

function App() {

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

  const listItems = quiz.map((quizIndex) =>
    <li>{quizIndex.question}</li>
  );

  let count = 0;
  const interval = setInterval(() => {
    count += 1;
    console.log(`インターバルのカウント: ${count}`);
    if (count >= 3) {
      clearInterval(interval);
    }
  }, 10000);

  return (
    <div className="App">
      <h3>
        <h1>ゲームタイマー</h1>
        <Countdown />
        <h2 className="text"></h2>
        <ul>{listItems}</ul>
      </h3>
    </div>
  );
}

export default App;

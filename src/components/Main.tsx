import React, { useState } from "react";
import Progress from "./Progress";
import Question from "./Question";
import Footer from "./Footer";
import ScoreBoard from "./ScoreBoard";

import { mainProps } from "../types";


const Main : React.FC<mainProps> = ({isStarted , handleStart}) =>  {

  const [currQuestion , setCurrQuestion] = useState<number>(0) ; 

  const [isClicked , setIsClicked] = useState<boolean>(false)

  const [hasAnswered , setHasAnswered] = useState<boolean>(false) ;

  const [score , setScore] = useState<number>(0);

  const [isFinished , setIsFinished] = useState<boolean>(false);

  const [highScore ,setHighScore] = useState<Array<number>>([])


  const getNextQuestion = () : void => {

    if(currQuestion !== 14) {
      setCurrQuestion((question) => question + 1) ;
    }
    else {
      setIsFinished(true);
      setHighScore((highScore) => [...highScore , score])
     }


    setIsClicked(false);

    setHasAnswered(false);
  }

  const handleClick = (currScore : number , answer : number , idx :number ) : void => {
    setIsClicked(true);
    setHasAnswered(true);
    if(answer === idx) {
      setScore((score) => score + currScore);
    }
  }


  const resetQuiz = () : void => {
      setCurrQuestion(0);
      setScore(0);
      setIsFinished(false);
      handleStart();
  }


return (

<main className={`main ${isStarted ? 'show' : 'hide'} `}>
  <Progress isFinished = {isFinished} currQuestion = {currQuestion} score = {score}/>
  <Question isFinished = {isFinished} hasAnswered = {hasAnswered} handleClick = {handleClick} currQuestion = {currQuestion}/>
  <Footer isFinished = {isFinished}  currQuestion = {currQuestion} isClicked = {isClicked} getNextQuestion = {getNextQuestion}/>
  <ScoreBoard highScore = {highScore} resetQuiz = {resetQuiz} score = {score} isFinished = {isFinished}/>
</main>

)

}


export default Main ; 
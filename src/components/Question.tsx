import React from 'react' ; 

import data from '../assets/questions.json' 

import { questionsData , questionProps } from '../types';

const questions : Array<questionsData> = data.questions ;

const Question : React.FC<questionProps> = ({currQuestion , handleClick , hasAnswered , isFinished}) =>  {



  return (

    <div className={`${ isFinished ? 'hide' : 'show'}`}>
      <h4>{questions[currQuestion].question}</h4>
      <div className="options">
        {
          questions[currQuestion].options.map((option , idx) : JSX.Element => {
              const answer = questions[currQuestion].correctOption ;
              const score = questions[currQuestion].points ;
              return (
                <button disabled={hasAnswered} onClick={() => handleClick(score, answer , idx)} key={idx} className={`btn btn-option ${hasAnswered ?  (answer === idx   ? 'correct answer' : 'wrong') : '' }`}>{option}</button>
              )
          })
        }
      </div>
    </div>

  )


} 


export default Question ;
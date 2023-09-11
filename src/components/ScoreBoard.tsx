import React from 'react' ;

import { scoreProps } from '../types';

const ScoreBoard : React.FC<scoreProps>  = ({score ,isFinished , resetQuiz , highScore}) =>  {

  const maxScore = Math.max(...highScore);

return (

  <div className={`${isFinished ? 'show' : 'hide'}`}>
  <p className="result">You scored {score} out of 280 ({Math.trunc(score * 100 / 280)})%</p>
  <p className="highscore">Highscore: {maxScore} points</p>
  <button className='btn btn-ui' onClick={resetQuiz}>Restart Quiz</button>
  </div>

);

}



export default ScoreBoard ;
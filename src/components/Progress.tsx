import React from 'react' ; 


import { progressProps } from '../types';




const Progress : React.FC<progressProps> = ({currQuestion , score , isFinished}) =>  {

return (
  <header className={`progress ${isFinished ? 'hide' : 'showGrid'}`}>
  <progress max={14} value={currQuestion}></progress>
  <p>Question <strong>{currQuestion + 1}</strong> / 15</p>
  <p> <strong>{score}</strong> / 280</p>
</header>
)

}


export default Progress ; 
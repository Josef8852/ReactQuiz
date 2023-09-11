import React from 'react' ; 

import { footerProps } from '../types';

const Timer : React.FC<footerProps> = ({getNextQuestion , isClicked , currQuestion ,isFinished}) => {

  return (

    <footer className={`${isFinished ? 'hide' : 'show'}`}>
     <button  className={`btn btn-ui ${isClicked ? 'show' : 'hide'}`} onClick={getNextQuestion}>{currQuestion === 14 ? 'Finish' : 'Next' }</button>
    </footer>

  )

} 


export default Timer ; 
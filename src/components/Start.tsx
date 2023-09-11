import React from 'react'
import { startProps } from '../types';


const Start : React.FC<startProps> = ({handleStart , isStarted}) => {

return (

  <div className={`start ${isStarted ? 'hide' : 'showFlex'}`}>
    <h2>Welcome to The React Quiz!</h2>
    <h3>15 questions to test your React mastery</h3>
    <button className='btn' onClick={handleStart}>Let's Start</button>
  </div>


)

}


export default Start ; 
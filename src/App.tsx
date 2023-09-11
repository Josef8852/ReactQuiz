import React , {useState} from "react"
import Header from './components/Header'
import Start from "./components/Start"
import Main from "./components/Main"

const App : React.FC = () =>  {

  const [isStarted , setIsStarted] = useState<boolean>(false) ;

  const handleStart = () : void => {
    setIsStarted((started) => !started) ;
  }

  return (
      <div className="app">
        <Header/>
        <Start handleStart = {handleStart}  isStarted = {isStarted}/>
        <Main handleStart = {handleStart} isStarted = {isStarted}/>
      </div>
  )

}

export default App

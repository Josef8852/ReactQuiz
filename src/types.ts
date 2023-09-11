type voidFunc = () => void ; 

export interface mainProps {
  isStarted : boolean ; 
  handleStart : voidFunc;
}


export interface startProps {
  handleStart  : voidFunc;
  isStarted : boolean ; 
}


export interface questionsData {
  question : string ; 
  options : Array<string>;
  correctOption : number ;
  points : number ;
}

type handleClickFunc = (currScore : number, answer : number , idx :number) => void ; 

export interface questionProps {
  currQuestion : number ; 
  handleClick : handleClickFunc ;
  hasAnswered : boolean ;
  isFinished : boolean;
}


export interface footerProps {
  getNextQuestion : voidFunc ; 
  isClicked  : boolean;
  currQuestion : number ;
  isFinished : boolean;
}

export interface progressProps {
  currQuestion : number ;
  score : number;
  isFinished : boolean;
}


export interface scoreProps {
  isFinished : boolean;
  score : number ;
  resetQuiz :  voidFunc;
  highScore : Array<number>;
}




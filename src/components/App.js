import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [getData,setData] = useState(0);
  const [getStop,setStop] = useState(true);
  const [getTimer,setTimer] = useState("");
  // write your code here 
  useEffect(()=>{
    countDownTimer();
  },[getData,getStop]);
  const callerKey = (e)=>{
      if(e.key==="Enter"){
          setStop(false);
          setData(Math.floor(e.target.value));
      }
  }    
  function countDownTimer(){
       let count = getData;
       
     
       if(count>=0){
        let myInterVal= setInterval(()=>{
          if(count<0 || !getStop){
            clearInterval(myInterVal);
            setStop(true);
            return;
          }
          
          console.log(count);
          if(count<6){
            setTimer(count);
          }
          count--;
        },1000);
       }else{
         return;
       }
      
  }
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={callerKey} /> sec.
        </h1>
      </div>
      <div id="current-time">{getTimer}</div>
    </div>
  )
}


export default App;

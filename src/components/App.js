import React from 'react'

import { Component, useEffect, useState,useRef } from "react";
import "./../styles/App.css";


function App {
    const [getCounter,setCounter] = useState(0);
    const [getValue,setValue] = useState(0);
    const ref = useRef();
    useEffect(()=>{
      
      clearInterval(ref.current);
      if(getCounter!=0){
          let count = getCounter;
        ref.current = setInterval(()=>{
            
            setValue(count);
             count--;
             if(count<0){
                 clearInterval(ref.current);
             }
        },1000);
      }
     
    },[getCounter]);

    const callerKey = (e)=>{
        if(e.key==="Enter"){
            setCounter(Math.floor(e.target.value));
        }
    }
    return (
        <div className="wrapper">
            <div id="whole-center">
                <h1>
                    Reverse countdown for<input type="number" id="timeCount" onKeyDown={callerKey} /> sec.
              </h1>
            </div>
            <div id="current-time">{getValue}</div>
        </div>
    )
}

export default App;

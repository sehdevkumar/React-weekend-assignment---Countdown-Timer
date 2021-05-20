import React from 'react'

import { Component, useEffect, useState,useRef } from "react";
import "./../styles/App.css";


const App=()=>{
    const [getCounter, setCounter] = useState(0);
  const [getCount,setCount] = useState(0);

  useEffect(() => {

    setTimeout(() => {

      getCounter > 0 && setCounter(getCounter - 1);

    //   console.log(getCounter);
       setCount(getCounter);

    }, 1000);

  }, [getCounter]);

  const callerKey = (e) => {

    if (e.key === "Enter" ) {

      setCounter(Math.floor(e.target.value));

    }

  };
    return (
        <div className="wrapper">
            <div id="whole-center">
                <h1>
                    Reverse countdown for<input   type="number" id="timeCount" onKeyDown={callerKey} /> sec.
              </h1>
            </div>
            <div id="current-time">{getCount}</div>
        </div>
    )
}

export default App;

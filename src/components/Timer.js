import React, { useEffect, useState } from "react";

function Timer({ timeLimit }) {
    const startTime = Number(timeLimit)*60;
    const [time, setTime] = useState(startTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);

    useEffect(() => {
        let intervalID;
        if (isTimeRunning) {
            intervalID = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
        }

        return () => clearInterval(intervalID)
    }, [isTimeRunning]);

    
    function stopTime() {
        setIsTimeRunning(false);
        setTime(startTime);
    }
    
    if( isTimeRunning && time >= 0) {
        stopTime()
    }


    return (
        <div>
            <h1>{String(parseInt(time / 60)).padStart(2, "0") + 
            ":" + 
            String(time % 60).padStart(2, "0")}</h1>
            <button onClick={() => setIsTimeRunning(!isTimeRunning)}>{isTimeRunning ? "PAUSE" : "START"}</button>
            <button onClick={stopTime}>STOP</button>
            <button onClick={()=> setTime(5)}>JUMP TIME TO 5s</button>
        </div>
    );
}

export default Timer;

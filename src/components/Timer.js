import React, { useEffect, useState } from "react";

function Timer({ currentTime, timeLimit }) {

    const [seconds, setSeconds] = useState(0);
    const [isTimeRunning, setIsTimeRunning] = useState("START");
    let intervalID;
    useEffect(() => {
        if (isTimeRunning !== "START") {
            intervalID = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }

        return () => clearInterval(intervalID)
    }, [isTimeRunning]);


    return (
        <div>
            <h1>{seconds}</h1>
            <button onClick={() => setIsTimeRunning(isTimeRunning === "START" ? "STOP" : "START")}>{isTimeRunning}</button>
        </div>
    );
}

export default Timer;

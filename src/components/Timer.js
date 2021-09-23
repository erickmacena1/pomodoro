import React, { useEffect, useState } from "react";

function Timer({ timeLimit, breakLimit }) {
    const startTime = Number(timeLimit) * 60;
    const breakTime = Number(breakLimit) * 60;
    const [time, setTime] = useState(startTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [moment, setMoment] = useState("Work");

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

    if (isTimeRunning && time <= 0) {
        if (moment === "Work") {
            setMoment("Rest");
            setTime(breakTime)
        }
        else {
            setMoment("Work");
            stopTime();
        }
    }



    return (
        <div>
            <h2>{moment}</h2>
            <h1>{String(parseInt(time / 60)).padStart(2, "0") +
                ":" +
                String(time % 60).padStart(2, "0")}</h1>

            <button onClick={() => setIsTimeRunning(!isTimeRunning)}>
                {isTimeRunning ? "PAUSE" : "START"}
            </button>

            <button onClick={stopTime}>
                STOP
            </button>

            <button onClick={() => setTime(5)}>
                JUMP TIME TO 5s
            </button>
        </div>
    );
}

export default Timer;

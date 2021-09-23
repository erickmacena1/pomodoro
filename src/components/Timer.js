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

        return () => clearInterval(intervalID);
    }, [isTimeRunning]);


    function stopTime() {
        setIsTimeRunning(false);
        setTime(startTime);
    }

    if (isTimeRunning && time <= 0) {
        if (moment === "Work") {
            setMoment("Rest");
            setTime(breakTime);
        }
        else {
            setMoment("Work");
            stopTime();
        }
    }

    return (
        <div className="border border-dark border-5 p-5 d-flex flex-column justify-content-center align-items-center">
            <h2 >{moment}</h2>
            <h3 className="display-1">{String(parseInt(time / 60)).padStart(2, "0") +
                ":" +
                String(time % 60).padStart(2, "0")}
            </h3>

            <div>
                <button className="btn btn-warning m-2" onClick={() => setIsTimeRunning(!isTimeRunning)}>
                    {isTimeRunning ? "PAUSE" : "START"}
                </button>

                <button className="btn btn-warning m-2" onClick={stopTime}>
                    STOP
                </button>
            </div>
                <button className="btn btn-warning" onClick={() => setTime(5)}>
                    JUMP TIME TO 5s
                </button>
        </div>
    );
}

export default Timer;

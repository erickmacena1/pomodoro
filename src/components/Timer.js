import React, { useEffect, useState } from "react";

function Timer({ workTimeMins="25", shortBreakMins="5", longBreakMins="15", maxSeries="4", audios }) {
    const startTime = Number(workTimeMins) * 60;
    const shortBreakTime = Number(shortBreakMins) * 60;
    const longBreakTime = Number(longBreakMins) * 60;

    const [time, setTime] = useState(startTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [moment, setMoment] = useState("Work");

    let currSerie = 0;

    useEffect(() => {
        let intervalID;
        if (isTimeRunning) {
            intervalID = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
        }

        return () => clearInterval(intervalID);
    }, [isTimeRunning]);

    if (isTimeRunning && time <= 0) {
        setIsTimeRunning(false);

        if (moment === "Work") {
            if(currSerie >= maxSeries) {
                setMoment("Break");
                setTime(longBreakTime);
            }
            else {
                setMoment("Respite");
                setTime(shortBreakTime);
            }

            audios.alarmAudio1.play();
        }
        else {
            setMoment("Work");
            setTime(startTime);
            audios.alarmAudio2.play();
        }
    }

    return (
        <div className="position-relative border border-dark border-5 p-5 d-flex flex-column justify-content-center align-items-center">
            <h6 className="position-absolute top-0 end-0 p-3">
                1/4
            </h6>
            <h2 >{moment}</h2>
            <h3 className="display-1">{String(parseInt(time / 60)).padStart(2, "0") +
                ":" +
                String(time % 60).padStart(2, "0")}
            </h3>

            <div className="d-flex flex-row">
                <button className="btn btn-warning m-2"
                    onClick={() => {
                        setIsTimeRunning(!isTimeRunning);
                        
                        if (isTimeRunning) {
                            audios.clickAudio2.play();
                        }
                        else {
                            audios.clickAudio1.play();
                        }
                    }}>
                    {isTimeRunning ? "PAUSE" : "START"}
                </button>

                <button className="btn btn-warning m-2"
                    onClick={() => {
                        setIsTimeRunning(false);
                        setTime(startTime);
                        audios.clickAudio2.play();
                    }}>
                    STOP
                </button>
            </div>
            <button className="btn btn-warning" onClick={() => {
                setTime(5);
                audios.clickAudio1.play();
            }}>
                JUMP TIME TO 5s
            </button>
        </div>
    );
}

export default Timer;

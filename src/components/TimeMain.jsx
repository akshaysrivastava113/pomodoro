import Timer from "./timer";
import { useEffect, useState } from 'react'

export default function TimeMain() {
    const [minutes, setMinutes] = useState(50);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState("stop");
    const [sessions, setSessions] = useState(0);

    useEffect(() => {
        //Instead of state variable it defines the timer here only, inside the useEffect 
        let intervalId;
;        if(isRunning == "start"){
            //decrease timer by 1
            intervalId = setInterval(() => {
                if(seconds == 0){
                    if(minutes == 0){
                        //Timer complete
                        setSessions(sessions+1);
                        clearInterval(intervalId);
                    } else {
                        setMinutes(minutes-1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds-1);
                }
            }, 1000);
        } else if (isRunning == "pause"){
            clearInterval(intervalId);
        } else if(isRunning == "stop") {
            //stop the timer
            clearInterval(intervalId);
            setMinutes(50);
            setSeconds(0);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, minutes, seconds]);

    //This useEffect runs when the component mounts, or if any of these state variables change
    
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-amber-50 rounded-full p-24 m-2">
        <h1>Total sessions: {sessions}</h1>
            <div id="timer-wrapper" className="p-2">
                <Timer minutes={minutes} seconds={seconds}/>
            </div>
            <div id="control-btns-wrapper" className="p-2">
            {isRunning == "stop" || isRunning == "pause"?<button className="text-center w-20 border-2 rounded-md p-2 m-2 bg-green-100" onClick={() => setIsRunning("start")}>{isRunning == "stop"?"Start":"Resume"}</button>:<button className="text-center w-20 border-2 rounded-md p-2 m-2 bg-red-300" onClick={() => setIsRunning("pause")}>Pause</button>}

            <button className="text-center w-20 border-2 rounded-md bg-red-300 p-2 m-2" onClick={() => setIsRunning("stop")}>Reset</button>
               
            </div>
        </div>
        </>
    )
}
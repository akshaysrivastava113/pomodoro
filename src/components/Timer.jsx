
export default function Timer(props){

    let secondsToDisplay;
    const secondsNum = props.seconds;
    if(secondsNum <= 9 && secondsNum >= 0) {
        secondsToDisplay = "0"+secondsNum;
    } else {
        secondsToDisplay = secondsNum;
    }
    return(
        <div className="flex">
            {/* <h1 className="text-2xl">{Math.floor(props.timer/60)}</h1><h1 className="text-2xl">:</h1><h1 className="text-2xl">{props.timer%60}</h1> */}
            <h1 className="text-lg">{props.minutes}</h1><h1 className="text-lg">:</h1><h1 className="text-lg">{secondsToDisplay}</h1>
        </div>
    )
}
import {useEffect, useState} from "react";

export function useTimer(startsFrom) {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(startsFrom);
    const [isStarted, setIsStarted] = useState(false);

    const isDone = seconds === 0;

    // Watchers
    // useEffect(() => {
    //     if(isStarted) {
    //         timerId.current = setInterval(() => {
    //             setTimer((prevTimer) => {
    //                 const nextTimer = prevTimer - 1;
    //
    //                 if(nextTimer === 0) {
    //                     stop();
    //                 }
    //
    //                 return nextTimer;
    //             });
    //         }, 1000);
    //     }else {
    //         clearInterval(timerId.current);
    //         timerId.current = null;
    //     }
    // }, [isStarted])

    useEffect(() => {
        if (isStarted) {
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            };
        }
    });


    // Handlers
    function start() {
        setIsStarted(true);
    }

    function stop() {
        setIsStarted(false);
    }

    function reset() {
        setIsStarted(true);
        setSeconds(startsFrom);
    }

    return {
        minutes,
        seconds,
        isDone,
        start,
        stop,
        reset,
    };
}
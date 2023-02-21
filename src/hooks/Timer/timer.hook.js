import {useEffect, useState} from "react";
import {info} from "../../config/globaInfo.config";

export function useTimer() {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(info.startFrom);
    const [isStarted, setIsStarted] = useState(false);

    const isTimeOut = seconds === 0;

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
        setSeconds(info.startFrom);
    }


    return {
        info: {
            minutes,
            seconds,
            isTimeOut,
            minTimeAlarm: info.minTimeAlarm,
        },
        actions: {
            start,
            stop,
            reset,
        }
    };
}
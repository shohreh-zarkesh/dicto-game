import {useState} from "react";

export function useResult(totalQuestionsCount = 0) {
    const info = {
        correctScore: 10,
        wrongScore: 5,
    };

    //date: new Date().toLocaleString(),

    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [skipAnswers, setSkipAnswers] = useState(0)
    const [fastestResponseTime, setFastestTime] = useState(0);
    const [totalScore, setTotalScore] = useState(0)
    const [questionCount, setQuestionCount] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    function questionsCounter() {
        setQuestionCount((prevState) => prevState + 1)
        console.log(questionCount)
//todo
        if (questionCount === totalQuestionsCount) {
            setIsFinished(true)
        }
    }

    function correctAnsInc() {
        setCorrectAnswers((prevState) => prevState + 1)
        questionsCounter()
        totalAnsInc()
    }

    function wrongAnsInc() {
        setWrongAnswers((prevState) => prevState + 1)
        totalAnsDec()
        questionsCounter()
    }

    function skipAnsInc() {
        setSkipAnswers((prevState) => prevState + 1)
        questionsCounter()
    }

    function totalAnsDec() {
        setTotalScore((prevState) => prevState - info.wrongScore)
    }

    function totalAnsInc() {
        setTotalScore((prevState) => prevState + info.correctScore)
    }

    function setFastestResponseTime(time) {
        setFastestTime(time)
    }

    return ({
        info: {
            correctAnswers,
            wrongAnswers,
            skipAnswers,
            fastestResponseTime,
            totalScore,
            isFinished,
        },
        actions: {
            correctAnsInc,
            wrongAnsInc,
            skipAnsInc,
            setFastestResponseTime
        }
    })
}
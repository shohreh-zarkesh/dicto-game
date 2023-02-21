//Custom Hooks
import {useTimer} from "../../../../hooks/Timer/timer.hook";

//Hooks
import {useEffect, useMemo, useState} from "react";

//ionic components
import {IonButton, IonButtons, IonPage, IonText, IonTitle, IonToolbar} from "@ionic/react";
import {BackButton} from "../../../../components/BackButton";
import {Timer} from "./components/Timer";
import {Score} from "./components/Score";

import "./index.css"
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useResult} from "../../../../hooks/Result/result.hook";
import {loadQuestions} from "../../../../store/questions/questions.actions";
import {If} from "../../../../components/IF";

export function QuizScreen() {

    const navigate = useNavigate()
    const location = useLocation();
    const quiz = useSelector((state) => state.questions)
    const dispatch = useDispatch();

    const timer = useTimer();
    const result = useResult();

    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        timer.actions.start();

        let userId = location.state.userId;
        console.log("chera dobar")
        
    }, []);

    const questions = useMemo(() => {
        dispatch(loadQuestions())
        return quiz.data;
    }, [])

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const activeQuestion = questions[activeQuestionIndex];

    useEffect(() => {
        if (timer.info.isTimeOut) {
            result.actions.skipAnsInc();
            nextQuestion()
            timer.actions.reset();
        }
    }, [timer.info.isTimeOut]);


    useEffect(() => {
        if (result.info.isFinished)
            console.log("Done")
        //تمام شد میفرستیم 30 تا رو میفرستیم دیتابیس
    }, [result.info.isFinished])

    function checkUserAnswer(userAnswer) {
        timer.actions.stop();
        if (userAnswer === questions[activeQuestionIndex].questionType) {
            result.actions.correctAnsInc()
            result.actions.setFastestResponseTime(timer.info.seconds);
        } else {
            result.actions.wrongAnsInc();
        }
        timer.actions.reset();

        nextQuestion()
    }

    function nextQuestion() {
        if (!result.info.isFinished) {
            setActiveQuestionIndex(index => index + 1);
        } else {
            console.log("im inja")
            console.log("activ", activeQuestionIndex)
            navigateToResultPage()
        }
    }

    function navigateToResultPage() {
        navigate("/result", {
            state: {
                userId: "shohreh_userID",
            }
        });
    }

    return (<>
        <IonPage>
            {/*!isLoading &&*/}
            <IonToolbar>
                <IonButtons slot="start">
                    <BackButton/>
                </IonButtons>
                <IonTitle>
                    <Timer minutes={timer.info.minutes} seconds={timer.info.seconds}
                           minValue={timer.info.minTimeAlarm}></Timer>
                </IonTitle>
                <IonButtons slot="end">
                    <IonButton size="small" fill="clear">Restart</IonButton>
                </IonButtons>
            </IonToolbar>

            <IonText>
                <If condition={!result.info.isFinished}>
                    {activeQuestion.quiz}
                </If>
            </IonText>
            <Score score={result.info.totalScore}> </Score>

            <IonButton onClick={() => checkUserAnswer(true)} strong="True" fill="outline" expand="block">
                CORRECT
            </IonButton>
            <IonButton onClick={() => checkUserAnswer(false)} strong="True" fill="outline" expand="block">
                WRONG
            </IonButton>
        </IonPage>
    </>)
}

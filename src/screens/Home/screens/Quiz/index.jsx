//Custom Hooks
import {useTimer} from "../../../../hooks/Timer/timer.hook";

//Hooks
import {useEffect, useState} from "react";

//ionic components
import {IonButton, IonButtons, IonPage, IonText, IonTitle, IonToolbar} from "@ionic/react";
import {BackButton} from "../../../../components/BackButton";
import {Timer} from "./components/Timer";
import {Score} from "./components/Score";

import "./index.css"
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useResult} from "../../../../hooks/Result/result.hook";

const questionsReducer = (store) => {
    return store.questions
}

export function QuizScreen() {

    const location = useLocation();
    const quiz = useSelector(questionsReducer)
    const dispatch = useDispatch();

    const timer = useTimer();
    const result = useResult(3);

    let [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        let userId = location.state.userId;
        console.log("chera dobar")

        // امروز سوال جواب داده یا نه
        // 30 تاش تموم شده یا نه
        // اگر نبود به اندازه تعدادی که لازم دارد لود کن
        //Setisfinish

        //use saga
        //fetch async
        //then dispatch setquiestions   and  setquestioncurrent and isloading(false)
    }, [])

    useEffect(() => {
        if (result.info.isFinished)
            console.log("Done")
        //تمام شد میفرستیم 30 تا رو میفرستیم دیتابیس
    }, [result.info.isFinished])

    //handle answer scor/ dispatch  and next and isfinish


    // ?  useEffect(()=>{
    //     if(randomWord)
    //         start
    // }, [currentWord])

    //Timer

    useEffect(() => {
        timer.actions.start();
    }, []);

    function checkUserAnswer(userAnswer) {
        (userAnswer /*todo === corrctAnswer*/) ? result.actions.correctAnsInc() : result.actions.wrongAnsInc()
    }

    return (<>
        <IonPage>
            {/*<If condition={!isLoading && !isFinished }>*/}
            {/*    /!*questionMemo {current randomword, handlerAnswer, answerRate, score}*!/*/}
            {/*</If>*/}
            {/* !isLoading  wait*/}

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

            <IonText>quiz</IonText>
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

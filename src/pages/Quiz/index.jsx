//Custom Hooks
import {useTimer} from "../../hooks/timer.hook";

//Hooks
import {useEffect} from "react";

//ionic components
import {IonBadge, IonButton, IonContent, IonPage} from "@ionic/react";
import {BackButton} from "../../components/BackButton";
import {Timer} from "./components/Timer";
import {Card} from "../../components/Card";
import {Score} from "./components/Score";


export function Quiz() {
    const info = {
        startTimer: 30,
        minTimeAlarm: 3,
    };

    //Timer
    const timer = useTimer(info.startTimer);
    useEffect(() => {
        timer.start();
    }, []);

    return (<>
        <IonPage>
            <IonContent fullscreen>
                <BackButton/>
                <Timer minutes={timer.minutes} seconds={timer.seconds} minValue={info.minTimeAlarm}></Timer>
                <IonButton size="small" fill="clear">Restart</IonButton>
                <Card text="quiz">  </Card>
                <Score score="6"> </Score>
                <IonBadge>
                    CORRECT
                </IonBadge>
                <IonBadge>
                    WRONG
                </IonBadge>
            </IonContent>
        </IonPage>
    </>)
}
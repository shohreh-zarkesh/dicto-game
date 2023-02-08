//Custom Hooks
import {useTimer} from "../../hooks/timer.hook";

//Hooks
import { useEffect, useMemo, useState } from "react";

//ionic components
import { IonContent, IonPage, IonBadge } from "@ionic/react";

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
                <IonBadge color={timer.value <= info.minTimeAlarm ? "danger" : "primary"}
                >
                    {timer.value}
                </IonBadge>
            </IonContent>
        </IonPage>
    </>)
}
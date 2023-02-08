//Custom Hooks
import {useTimer} from "../../hooks/timer.hook";

//Hooks
import {useEffect} from "react";

//ionic components
import {IonBadge, IonButton, IonContent, IonPage} from "@ionic/react";
import {NavLink} from "react-router-dom";


//Icon
import {IoIosArrowBack} from 'react-icons/io';

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
                <NavLink to="/" end>
                    <IoIosArrowBack/>
                </NavLink>
                <IonBadge color={timer.value <= info.minTimeAlarm ? "danger" : "primary"}>
                    {timer.value}
                </IonBadge>
                <IonButton fill="clear">Restart</IonButton>
            </IonContent>
        </IonPage>
    </>)
}
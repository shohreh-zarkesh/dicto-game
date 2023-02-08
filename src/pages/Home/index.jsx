import {IonApp} from "@ionic/react";
import {NavLink} from "react-router-dom";
import React from "react";


export function Home() {
    return (<>
        <IonApp>
            <NavLink to="quiz" end>
                Quiz
            </NavLink>
        </IonApp>
    </>)
}
import {IonText} from "@ionic/react";

export function Score(props) {
    return (
        <IonText>
            <h1>{props.score}</h1>
            SCORE
        </IonText>
    )
}
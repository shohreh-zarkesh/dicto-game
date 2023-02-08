import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/react";

export function Card(props) {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {props.text}
            </IonCardContent>
        </IonCard>
    )
}
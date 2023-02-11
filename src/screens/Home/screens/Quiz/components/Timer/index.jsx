import {IonBadge} from "@ionic/react";

export function Timer(props){

    return (
        <IonBadge color={props.seconds <= props.minValue ? "danger" : "primary"}>
            {`${props.minutes.toLocaleString(undefined, {minimumIntegerDigits: 2})} : ${props.seconds.toLocaleString(undefined, {minimumIntegerDigits: 2})}`}
        </IonBadge>
    )
}
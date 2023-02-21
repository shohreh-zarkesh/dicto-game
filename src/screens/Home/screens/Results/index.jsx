import {IonButtons, IonPage, IonToolbar} from "@ionic/react";
import {BackButton} from "../../../../components/BackButton";

export function ResultsScreen() {

    return (<>
        you are in Result
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <BackButton/>
                </IonButtons>
            </IonToolbar>
        </IonPage>
    </>)
}
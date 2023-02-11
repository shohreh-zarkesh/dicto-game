import React, {useState} from 'react';
import {IonButton, IonInput, IonItem, IonLabel, IonNote} from '@ionic/react';

export function SignUpScreen() {
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const validateEmail = (email) => {
        return email.match(
            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    };

    const validate = (ev) => {
        const value = (ev.target).value;
        setIsValid(undefined);

        if (value === '') return;
        validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };

    const markTouched = () => {
        setIsTouched(true);
    };

    return (
        <>

            <IonItem fill="outline">
                <IonLabel position="floating">Firstname</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem fill="outline">
                <IonLabel position="floating">LastName</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem fill="outline"
                     className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email" onIonInput={(event) => validate(event)}
                          onIonBlur={() => markTouched()}
                          placeholder="Enter a valid email (example@domain)"></IonInput>
                <IonNote slot="error">Invalid email</IonNote>
            </IonItem>
            <IonItem fill="outline">
                <IonLabel position="floating">Username</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem fill="outline">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password"></IonInput>
            </IonItem>
            <IonItem fill="outline">
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput type="password"></IonInput>
            </IonItem>

            <IonButton>
                Register
            </IonButton>

        </>
    );
}
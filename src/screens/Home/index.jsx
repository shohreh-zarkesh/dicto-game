import React, {useState} from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonModal,
    IonPage,
    IonSlide,
    IonSlides,
    IonTitle,
    IonToolbar,
    useIonAlert,
} from "@ionic/react";


import "./index.css"
import {ModalMenu} from "./components/ModalMenu";
import {useNavigate} from "react-router-dom";
import {checkGetLimitCount} from "../../utils/check-get-limit-count.utils";
import {info} from "../../config/globaInfo.config";

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export function HomeScreen() {

    const navigate = useNavigate()
    const [presentAlert] = useIonAlert();
    const [scoreNotEnoughAlert] = useIonAlert();
    const [handlerMessage, setHandlerMessage] = useState('');
    const [roleMessage, setRoleMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    function naviagetToQuizPage() {
        navigate("/quiz", {
            state: {
                userId: "shohreh_userID",
            }
        });
    }

    function letsStartQuiz() {
        function reduceScore() {
            //fetch score from DB
            //check enough score
            if (true) {
                //reduce and update Score
                //async if correct go to quiz page
                naviagetToQuizPage()
            } else {
                scoreNotEnoughAlert({
                    header: 'Alert',
                    message: "you don't have enough score",
                    buttons: ['OK'],
                })
            }
        }

        if (checkGetLimitCount()) {
            presentAlert({
                message: `Just ${info.questionPerDay} question per day,
                 Do you like to pay 100 score to quiz again?`,
                buttons: [
                    {
                        text: 'no',
                        role: 'cancel',
                    },
                    {
                        text: 'Yes',
                        role: 'confirm',
                        handler: () => {
                            // setHandlerMessage('Alert confirmed');
                            reduceScore()
                        },
                    },
                ],
                onDidDismiss: (e) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
            })
        } else {
            naviagetToQuizPage()
        }
    }

    return (
        <IonPage>
            <ModalMenu/>
            <IonContent>
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide>
                        <h1>Play with Friends</h1>
                    </IonSlide>
                    <IonSlide>
                        <h1>Have a fun time</h1>
                    </IonSlide>
                    <IonSlide>
                        <h1>easy to learn</h1>
                    </IonSlide>
                </IonSlides>
            </IonContent>
            <IonButton onClick={letsStartQuiz}>
                START PLAY
            </IonButton>
            <IonButton fill="clear" expand="block" onClick={() => setIsOpen(true)}>
                HOW TO PLAY?
            </IonButton>
            <IonModal isOpen={isOpen}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>How to play</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae
                        ducimus quos
                        reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit
                        cum qui.
                        Eaque, dicta.
                    </p>
                </IonContent>
            </IonModal>

        </IonPage>
    );
}

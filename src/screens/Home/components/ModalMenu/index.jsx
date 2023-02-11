import {
    IonAvatar,
    IonButton,
    IonContent,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonToggle,
    IonToolbar
} from "@ionic/react";
import {Link} from "react-router-dom";
import React, {useRef} from "react";

//Css
import "./index.css"
import menuIcon from "../../assets/menuIcon.jfif";

export function ModalMenu() {
    const modal = useRef(null);

    function dismiss() {
        modal.current?.dismiss();
    }

    return (
        <>
            <IonContent className="ion-padding">
                <IonButton id="open-modal">
                    <IonImg className="menu-icon" src={menuIcon}/>
                </IonButton>
            </IonContent>

            <IonModal id="example-modal" ref={modal} trigger="open-modal">
                <IonContent>
                    <IonToolbar>

                    </IonToolbar>
                    <IonList>
                        <IonItem>
                            <IonAvatar slot="start">
                                <IonImg src="https://i.pravatar.cc/300?u=b"/>
                            </IonAvatar>
                            <IonLabel>
                                <h2>Connor Smith</h2>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <h2>Dark mode</h2>
                            </IonLabel>
                            <IonToggle slot="start" color="dark" checked={true}></IonToggle>
                        </IonItem>
                        <IonItem>
                            <Link to="/result">
                                Result
                            </Link>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonModal>
        </>
    )
}
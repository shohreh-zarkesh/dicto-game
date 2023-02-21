import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './App';

import {IonApp} from "@ionic/react";
import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <IonApp>
                <App/>
            </IonApp>
        </Provider>
    </React.StrictMode>
);

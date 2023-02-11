import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './App';

import {IonApp} from "@ionic/react";
import {createStore} from 'redux';
import {reducers} from "./store/index.reducer";

const store = createStore(reducers)
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

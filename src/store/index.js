import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./index.reducer";
import createSagaMiddleware from "redux-saga";
import {combineCounterSagas} from "./questions/questions.sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

//combineSagas
sagaMiddleware.run(combineCounterSagas);

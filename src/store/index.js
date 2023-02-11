import { createStore, compose, applyMiddleware} from "redux";
import { reducers } from "./index.reducer";
import createSagaMiddleware from "redux-saga";
import { combineSagas } from "./index.sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducers,
  {},
   compose(
       applyMiddleware(sagaMiddleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);
sagaMiddleware.run(combineSagas);

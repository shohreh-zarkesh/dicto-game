import { combineReducers } from "redux";
import { questionsReducer } from "./questions/questions.reducer";

export const reducers = combineReducers({
    questions:questionsReducer,
})
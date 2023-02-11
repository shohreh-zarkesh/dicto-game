import { put, takeEvery, all, delay } from 'redux-saga/effects';
import {loadQuestions, setQuestions} from "./questions.actions"
import {LOAD_QUESTIONS, SET_QUESTIONS} from "./questions.constant"

function* loadQuestionsAsync() {
    yield put(loadQuestions);
}

function* setQuestionsAsync() {
    yield put(setQuestions());
}
export function* combineCouterSagas() {
    yield all([takeEvery(loadQuestionsAsync, LOAD_QUESTIONS), takeEvery(setQuestionsAsync(), SET_QUESTIONS)]);
}





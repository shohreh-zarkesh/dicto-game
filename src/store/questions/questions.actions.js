import {LOAD_QUESTIONS, SET_QUESTIONS} from "./questions.constant"


export function setQuestions(data) {
    return {
        type: SET_QUESTIONS,
        payload: data,
    }
}

export function loadQuestions() {
    return {
        type: LOAD_QUESTIONS,
    }
}
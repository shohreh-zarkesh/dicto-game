import {LOAD_QUESTIONS, SET_QUESTIONS} from "./questions.constant";

const initialState = {
    data: [],
    loading: false,
}

export function questionsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_QUESTIONS: {
            state = {
                ...state,
                data: action.payload
            }
        }
            break;
        case LOAD_QUESTIONS:

            state = {
                ...state,
                loading: action.payload
            }
            break;
    }
    return state;
}
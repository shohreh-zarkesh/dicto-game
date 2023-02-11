import {LOAD_QUESTIONS, SET_QUESTIONS} from "./questions.constant";

const initialState = {
    data: {},
    Loading: false,
}

export function questionsReducer(state = initialState, action) {
    const updateState = $state => Object.assign({}, $state, state)
    switch (action.type) {
        case SET_QUESTIONS:
            state = updateState({data: {...action.payload}})
            break;
        case LOAD_QUESTIONS:
            state = updateState({Loading: action.payload})
            break;
    }
    return state;
}
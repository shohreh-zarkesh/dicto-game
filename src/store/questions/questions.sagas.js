import {all, put, takeEvery} from 'redux-saga/effects';
import {LOAD_QUESTIONS} from "./questions.constant"
import {setQuestions} from "./questions.actions";


//todo
function getTestQuestion() {
    const QUESTION_TYPE = {
        WRONG: false,
        CORRECT: true,
    }
    let questionObj = [
        {correct: "apple", wrong: "aple"},
        {correct: "quiz", wrong: "quize"},
        {correct: "reduce", wrong: "reduse"}
    ];

    let questionList = [];
    for (const question of questionObj) {
        //انتخاب رندوم بین صحیح یا اشتباه
        const questionType = Math.random() > 0.5 ? QUESTION_TYPE.CORRECT : QUESTION_TYPE.WRONG;
        questionList.push({questionType, quiz: (questionType) ? question.correct : question.wrong})
    }

    return questionList;
}

function* loadQuestionsAsync() {
    let questions = getTestQuestion();
    yield put(setQuestions(questions));
}

// function* setQuestionsAsync() {
//     //yield put(setQuestions());
// }

export function* combineCounterSagas() {
    // yield all([takeEvery(loadQuestionsAsync, LOAD_QUESTIONS), takeEvery(setQuestionsAsync(), SET_QUESTIONS)]);
    yield all([takeEvery(LOAD_QUESTIONS, loadQuestionsAsync)]);
}





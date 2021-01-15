import { act } from "react-dom/test-utils";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { postData } from './post_request'
function* getApiData(action) {
    // console.log(action.payload)
    try {
        const data = yield call(() => postData(action.payload));
        console.log(data)
        yield put({ type: 'SUCCESS', payload: action.payload });
    } catch (e) {
        yield put({ type: 'ERROR' })
    }
}

export default function* mySaga() {
    yield takeEvery('REQUEST_API_DATA', getApiData);
}
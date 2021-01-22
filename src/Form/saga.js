import { act } from "react-dom/test-utils";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { postData } from './post_request'
import { REQUEST_API_DATA, SUCCESS, ERROR } from './redux/constants'
import { success, error } from './redux/actions'
import { make_indiaCode } from './handlers'

function* getApiData(action) {
    try {
        const user = make_indiaCode(action.payload)
        const data = yield call(() => postData(user));
        console.log(data)
        yield put(success(user));
    } catch (e) {
        yield put(error())
    }
}

export default function* mySaga() {
    yield takeEvery(REQUEST_API_DATA, getApiData);
}
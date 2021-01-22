import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import reducer from '../redux/reducer'
import mySaga from '../saga'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
)
sagaMiddleware.run(mySaga);
export default store
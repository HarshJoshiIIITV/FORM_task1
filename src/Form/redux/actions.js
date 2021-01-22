import { REQUEST_API_DATA, SUCCESS, ERROR } from './constants'

export const postData = (user) => {
    return {
        type: REQUEST_API_DATA,
        payload: user
    }
}

export const success = (user) => {
    return {
        type: SUCCESS,
        payload: user
    }
}

export const error = (user) => {
    return {
        type: ERROR
    }
}
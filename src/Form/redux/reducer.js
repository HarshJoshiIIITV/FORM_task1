import { REQUEST_API_DATA, SUCCESS, ERROR } from './constants'
const initialState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        country: ''
    },
    error: '',
    login: false
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST_API_DATA:
            return { error: '', login: false, user: payload }
        case SUCCESS:
            return { user: payload, error: '', login: true }
        case ERROR:
            return { ...state, error: 'ERROR OCCURS', login: false }
        default:
            return state
    }
}

export default reducer
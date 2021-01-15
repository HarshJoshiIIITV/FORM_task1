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
        case 'REQUEST_API_DATA':
            return { error: '', login: false, user: payload }
        case 'SUCCESS':
            return { ...state, error: '', login: true }
        case 'ERROR':
            return { ...state, error: 'ERROR OCCURS', login: false }
        default:
            return state
    }
}

export default reducer
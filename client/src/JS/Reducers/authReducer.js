import { LOAD_USER_SUCCESS, LOAD_USER_FAIL, 
    REGISTER_SUCCESS, REGISTER_FAIL,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../Actions/actionsTypes";



const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: false,
   user: null,
   errors: null
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true
            }
        case LOGOUT:
        case LOGIN_FAIL:
        case LOAD_USER_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                errors: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer


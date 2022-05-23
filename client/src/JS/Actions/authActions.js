import { LOAD_USER_SUCCESS, LOAD_USER_FAIL, 
         REGISTER_SUCCESS, REGISTER_FAIL,
         LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./actionsTypes";
import axios from 'axios';
import setTokenHeader from '../../Utils/setTokenHeader';



/*/ regitser user /*/
export const register = (info) => dispatch => {
    axios.post('/register', info)
    .then(res =>
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        }))
        .catch((err) => console.log(err))
}

/*/ load user /*/
export const loadUser = () => dispatch => {
    setTokenHeader()
    axios.get('/login')
        .then(res => dispatch({
            type: LOAD_USER_SUCCESS,
            payload: res.data
        }))
        .catch(() => dispatch({
            type: LOAD_USER_FAIL
        }))
 }

/*/ login user /*/
export const login = data => dispatch => {
    axios.post('/login', data)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser())
        })
        .catch(err => dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
        }))
}

/*/ logout user /*/ 
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}
import AxiosInstance from '../../axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionsTypes';
import { API_LOGIN } from '../../api/api';

export function auth({ email, password }) {
    return dispatch => {
        const authData = {
            email, password,
            returnSecureToken: true
        }

        AxiosInstance.post(API_LOGIN, authData)
            .then(({ data }) => {
                console.log('ok', data);

                localStorage.setItem('token', data.token)
                localStorage.setItem('userId', data.data.id)

                dispatch(authSuccess(data.token))
            })
            .catch(e => {
                // console.log('error', e.response.data.message);
            });

        // dispatch(autoLogout(data.expiresIn))
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}



export function logout() {
    localStorage.removeItem('token')
    return {
        type: AUTH_LOGOUT
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            dispatch(authSuccess(token))
        }
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}
import AxiosInstance from '../../axios';
import { ROUTE_LOGIN } from '../../api/routes';
import { AUTH_SUCCESS } from './actionsTypes';

export function auth({ email, password }) {
    return dispatch => {
        const authData = {
            email, password,
            returnSecureToken: true
        }

        AxiosInstance.post(ROUTE_LOGIN, authData)
        .then(r => {
            console.log('ok', r.data);
        })
        .catch(e => {
            console.log('error', e.response.data.message);
        });


        // console.log(data);

        // const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

        // localStorage.setItem('token', data.idToken)
        // localStorage.setItem('userId', data.localId)
        // localStorage.setItem('expirationDate', expirationDate)

        // dispatch(authSuccess(data.idToken))
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
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        // type: AUTH_LOGOUT
    }
}

import AxiosInstance from '../../axios';
import { AUTH_SUCCESS } from './actionsTypes';
import { API_SIGNUP } from '../../api/api';

export function register({ email, password, password_confirmation }) {
    return dispatch => {
        const authData = {
            email, password, password_confirmation,
            returnSecureToken: true
        }

        AxiosInstance.post(API_SIGNUP, authData)
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


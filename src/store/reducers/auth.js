import { AUTH_LOGOUT, AUTH_SUCCESS } from "../actions/actionsTypes"

const initialState = {
  token: null
}

export default function authReducer(state = initialState, { type, token }) {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state, token
      }
    case AUTH_LOGOUT:
      return {
        ...state, token: null
      }
    default:
      return state
  }
}
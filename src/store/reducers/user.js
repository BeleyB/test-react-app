import { SET_USER } from "../actions/actionsTypes";



// const initialState = {
// }



export const userReducer = (state = {}, actions) => {
    const { type, user } = actions;
    switch (type) {
        case SET_USER:
            return {
                ...user
            }
        default: 
            return state;
    }
}






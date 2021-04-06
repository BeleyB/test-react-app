import { SET_ALERT, ADD_ALERT, REMOVE_ALERT } from "../actions/actionsTypes";

const initialState = {
    visible: false,
    message: 'Message',
    alerts: [],
    alertsNextId: 1
};



export const alertReducer = (state = initialState, actions) => {
    const {
        type,
        visible = false,
        alert,
        id,
        callback = () => {}
    } = actions;

    switch (type) {
        case ADD_ALERT:
            const newAlert = {
                ...alert,
                id: ++state.alertsNextId
            };
            callback(newAlert);
            return {
                ...state,
                alerts: [
                    ...state.alerts,
                    newAlert
                ],
                alertsNextId: ++state.alertsNextId
            }

        case REMOVE_ALERT:
            return {
                ...state,
                alerts: state.alerts.filter(alert => alert.id !== id),
            }

        case SET_ALERT:
            return {
                ...state,
                visible,
            }

        default:
            return state;
    }
}






import { useCallback } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ALERT, REMOVE_ALERT, SET_ALERT } from "../../store/actions/actionsTypes";

let maxCallback = (acc, cur) => Math.max(acc.id, cur.id)

function getNextId(arr) {
    return arr.length ? arr.reduce(maxCallback) + 1 : 1;
}

export function useCreateAlert() {
    const dispatch = useDispatch();
    const { alerts } = useSelector(state => state?.alert);

    const createAutoRemove = useCallback((alert, delay = 1000) => {
        setTimeout(() => {
            dispatch({ type: REMOVE_ALERT, id: alert.id })
        }, delay);
    }, [dispatch]);

    const addAlert = useCallback(({ variant = 'success', message = 'Message', options = { autoRemove: true } }) => {
        let alert = {
            variant,
            message,
        };
        dispatch({
            type: ADD_ALERT, alert, callback: (newAlert) => {
                if (options.autoRemove) {
                    createAutoRemove(newAlert);
                }
            }
        });
    }, [alerts, dispatch]);

    return addAlert;
}



export default function AlertContainer () {
    const { message, visible, alerts } = useSelector(state => state?.alert);

    const dispatch = useDispatch();
    const actionAlert = useCallback(
        (visible) => dispatch({ type: SET_ALERT, visible }),
        [dispatch]
    );

    return (
        <>
            { visible &&
                <Alert variant="success" onClose={() => actionAlert(false)} dismissible>
                    {message}
                </Alert>
            }
            { alerts.map(alert => (
                <Alert variant={alert.variant} key={alert.id}>
                    {alert.message}
                </Alert>
            ))}
        </>
    )
}
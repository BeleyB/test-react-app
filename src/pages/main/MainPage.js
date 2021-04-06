import { useDispatch } from 'react-redux';
import { SET_ALERT } from '../../store/actions/actionsTypes';
import { useCallback } from 'react';
import { useCreateAlert } from '../../components/Alert/AlertContainer';



export const MainPage = () => {
    const dispatch = useDispatch();
    const actionAlert = useCallback(
      (visible) => dispatch({ type: SET_ALERT, visible }),
      [dispatch]
    );
    const addAlert = useCreateAlert();

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <div className="App d-grid gap-2 col-6 mx-auto">
                        <button type="button" onClick={() => { actionAlert(true) }} className="btn btn-primary">Show</button>
                        <button type="button" onClick={() => { addAlert({ message: 'Text' }) }} className="btn btn-primary">Add alert</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
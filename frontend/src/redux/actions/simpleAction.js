import { SIMPLE_ACTION, SIMPLE_ACTION_ASYNC } from '../types/simpleTypes';

// Action creator for a simple action
export const simpleAction = () => {
    return {
        type: SIMPLE_ACTION,
        payload: 'This is a simple action payload'
    };
};

// Asynchronous action creator using redux-thunk
export const simpleActionAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: SIMPLE_ACTION_ASYNC,
                payload: 'This is an asynchronous action payload'
            });
        }, 2000);
    };
};

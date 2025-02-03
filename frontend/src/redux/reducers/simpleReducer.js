import { SIMPLE_ACTION, SIMPLE_ACTION_ASYNC } from '../types/simpleTypes';

// Initial state for the simple reducer
const initialState = {
    message: '',
    asyncMessage: ''
};

// Reducer function to handle the simple action and asynchronous action
const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIMPLE_ACTION:
            return {
                ...state,
                message: action.payload
            };
        case SIMPLE_ACTION_ASYNC:
            return {
                ...state,
                asyncMessage: action.payload
            };
        default:
            return state;
    }
};

export default simpleReducer;

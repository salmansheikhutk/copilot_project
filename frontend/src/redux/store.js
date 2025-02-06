import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import simpleReducer from './reducers/simpleReducer';

// Combine all reducers into a root reducer
// This allows the store to manage multiple slices of state
const rootReducer = combineReducers({
    simple: simpleReducer
});

// Create the Redux store with middleware
// The store holds the application state and allows actions to be dispatched
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
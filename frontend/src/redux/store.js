import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import simpleReducer from './reducers/simpleReducer';

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
    simple: simpleReducer
});

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
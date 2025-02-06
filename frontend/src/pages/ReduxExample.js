import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { simpleAction, simpleActionAsync } from '../redux/actions/simpleAction';

function ReduxExample() {
    const dispatch = useDispatch();
    const message = useSelector(state => state.simple.message);
    const asyncMessage = useSelector(state => state.simple.asyncMessage);

    // Dispatch the synchronous action
    // This updates the state with a simple message
    const handleSyncClick = () => {
        dispatch(simpleAction());
    };

    // Dispatch the asynchronous action
    // This updates the state with an asynchronous message after a delay
    const handleAsyncClick = () => {
        dispatch(simpleActionAsync());
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="title">Redux Example</h1>
            <button onClick={handleSyncClick} className="btn btn-primary">Dispatch Synchronous Action</button>
            <p>{message}</p>
            <button onClick={handleAsyncClick} className="btn btn-secondary">Dispatch Asynchronous Action</button>
            <p>{asyncMessage}</p>
        </div>
    );
}

export default ReduxExample;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/action/CombineAction';

const Counter = () => {
    const count = useSelector(state => state.counterReducers);
    const dispatch = useDispatch()
    return (
        <>
            <button
            onClick={()=>dispatch(Actions.handleCounter.increment(5))}
            > Arttır </button>
            <br />
            <p>{count}</p>
            <button onClick={()=>dispatch(Actions.handleCounter.decrement(5))}> Azalt </button>
        </>
    )
}

export default Counter;
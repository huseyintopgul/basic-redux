import ActionTypes from '../actionType/CombineActionType';

const increment = (val) => {
    return { type: ActionTypes.CounterActionTypes.INCREASE_COUNT, payload: val }
};
const decrement = (val) => {
    return { type: ActionTypes.CounterActionTypes.DECREASE_COUNT, payload: val }
}
const handleCounter = { increment, decrement };
export default handleCounter;

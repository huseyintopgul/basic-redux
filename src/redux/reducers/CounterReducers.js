import ActionTypes from "../actionType/CombineActionType";

const initialState = 0;

const counterReducers = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.CounterActionTypes.INCREASE_COUNT:
            return state+action.payload;
        case ActionTypes.CounterActionTypes.DECREASE_COUNT:
            return state-action.payload;
        default:
            return state;
    }
}

export default counterReducers;
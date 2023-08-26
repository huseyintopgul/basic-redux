import ActionTypes from '../actionType/CombineActionType';


const initialState = { backgroundColor: 'red' };
const themeReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ThemeActionTypes.LIGHT_MODE:
            return action.payload;
        case ActionTypes.ThemeActionTypes.DARK_MODE:
            return action.payload;
        default:
           return state;
    }
}
export default themeReducers;


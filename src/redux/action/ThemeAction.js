import ActionTypes from "../actionType/CombineActionType";

const lightMode = (val) => {
    return ({ type: ActionTypes.ThemeActionTypes.LIGHT_MODE, payload:val })
};

const darkMode = (val) => {
    return ({ type: ActionTypes.ThemeActionTypes.DARK_MODE, payload:val })
}

const themeMode = { lightMode, darkMode };
export default themeMode;
import React from 'react';
import Actions from '../redux/action/CombineAction';
import { useDispatch, useSelector } from 'react-redux';


const Theme = () => {
    const theme = useSelector(state => state.themeReducers);
    const dispatch = useDispatch();

    return (
        <div style={theme}>
            <button onClick={() => dispatch(Actions.themeMode.lightMode({backgroundColor:'#fff'}))}>
                LIGHT
            </button>
            <br />
            <br />
            <button onClick={() => dispatch(Actions.themeMode.darkMode({backgroundColor:'#ccc'}))}>
                DARK
            </button>
        </div>
    )
}

export default Theme
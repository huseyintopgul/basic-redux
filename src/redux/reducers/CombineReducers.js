import { combineReducers } from 'redux';
import counterReducers from './CounterReducers';
import themeReducers from './ThemeReducers';


const rootReducers = combineReducers({
    counterReducers,
    themeReducers
});

export default rootReducers;
import {createStore} from 'redux';
import { combineReducers } from 'redux';
import headerReducer from './routes/header/reducer';
import sideReducer from './routes/side/reducer';
import numReducer from './routes/hooks_demo/reducer.js';
import reducerCount from './routes/redux_only_demo/reducer.js';

const reducers = combineReducers({
    header: headerReducer,
    side: sideReducer,
    num1: numReducer,
    reducerCount
}) 
const store = createStore(reducers);
export default store;

import itemDetailsReducer from './ItemDetailsReducer.js';
import itemsListReducer from './ItemsListReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    itemDetailsReducer,
    itemsListReducer
});

export default allReducers;
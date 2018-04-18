import {ITEMS_LIST_REQUEST} from '../actions/actionTypes';
import {ITEMS_LIST_SUCCESS} from '../actions/actionTypes';
import {ITEMS_LIST_INSTANT_FILTER_REQUEST} from '../actions/actionTypes';
import {ITEMS_LIST_INSTANT_FILTER_SUCCESS} from '../actions/actionTypes';

const initialState = {
    loading: false
};

const itemsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_LIST_REQUEST:
            return { ...state, loading: true};
        case ITEMS_LIST_SUCCESS:
            return {...state, loading: false, itemsList: action.itemsList}
        case ITEMS_LIST_INSTANT_FILTER_REQUEST:
            return { ...state};
        case ITEMS_LIST_INSTANT_FILTER_SUCCESS:
            return { ...state, textToFind: action.search};
        default:
            return state;
    }
}

export default itemsListReducer;
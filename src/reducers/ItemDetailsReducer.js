import { ITEM_DETAILS_REQUEST } from '../actions/actionTypes';

const initialState = {
    selectedItem: 'none'
};

const itemDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_DETAILS_REQUEST:
            return { ...state, selectedItem: action.selectedItem};
        default:
            return state;
    }
}

export default itemDetailsReducer;
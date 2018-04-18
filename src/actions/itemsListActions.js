import { ITEMS_LIST_REQUEST} from './actionTypes';
import { ITEM_DETAILS_REQUEST} from './actionTypes';
import { ITEMS_LIST_INSTANT_FILTER_REQUEST} from './actionTypes';

export const showListAction = () => {
    return {
        type: ITEMS_LIST_REQUEST
    }
}

export const showItemDetailsAction = (item) => {
    return {
        type: ITEM_DETAILS_REQUEST,
        selectedItem: item
    }
}

export const applyItemsListInstantFilterAction = (search) => {
    return {
        type: ITEMS_LIST_INSTANT_FILTER_REQUEST,
        search: search
    }
}
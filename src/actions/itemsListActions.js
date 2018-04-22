// @flow
import { ITEMS_LIST_REQUEST} from './actionTypes';
import { ITEM_DETAILS_REQUEST} from './actionTypes';
import { ITEMS_LIST_INSTANT_FILTER_REQUEST} from './actionTypes';

type ShowListAction = {type: string};
type ShowItemDetailsAction = {type: string; selectedItem: number};
type ApplyItemsListInstantFilterAction = {type: string; search: string};

export const showListAction = () : ShowListAction => {
    return {
        type: ITEMS_LIST_REQUEST
    }
}

export const showItemDetailsAction = (item : number) : ShowItemDetailsAction => {
    return {
        type: ITEM_DETAILS_REQUEST,
        selectedItem: item
    }
}

export const applyItemsListInstantFilterAction = (search : string) : ApplyItemsListInstantFilterAction => {
    return {
        type: ITEMS_LIST_INSTANT_FILTER_REQUEST,
        search: search
    }
}
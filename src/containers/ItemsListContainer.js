import { connect } from 'react-redux';
import ItemsListComponent from '../components/ItemsListComponent';
import {showListAction} from "../actions/itemsListActions";
import {showItemDetailsAction} from "../actions/itemsListActions";
import {applyItemsListInstantFilterAction} from "../actions/itemsListActions";

const dispatchActions = (dispatch) => {
    return {
        showList: () => {
            return dispatch(showListAction());
        },
        selectItem: (itemName) => {
            return dispatch(showItemDetailsAction(itemName));
        },
        applyItemListFilter: (search) => {
            return dispatch(applyItemsListInstantFilterAction(search));
        }
    };
};

function prepareFilteredItemsList(textToFind, list) {
    return textToFind === undefined ?
        list:
        list.filter((item) => {return item.id.toString().includes(textToFind)}
    );
}

export const mapStateToProps = (state) => {
    return {
        textToFind: state.itemsListReducer.textToFind,
        loading: state.itemsListReducer.loading,

        stateActions: {
                getItemsList: () => prepareFilteredItemsList(
                    state.itemsListReducer.textToFind,
                    state.itemsListReducer.itemsList
                )
            }

    }
}

export const mapDispatchToProps = (dispatch) => {
    return { dispatchActions: dispatchActions(dispatch) }
};

const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsListComponent);
export default ItemsListContainer;
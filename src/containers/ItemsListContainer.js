import { connect } from 'react-redux';
import ItemsListComponent from '../components/ItemsListComponent';
import {showListAction} from "../actions/itemsListActions";
import {showItemDetailsAction} from "../actions/itemsListActions";
import {applyItemsListInstantFilterAction} from "../actions/itemsListActions";

const dispatchActions = (dispatch) => {
    return {
        showList: () => {
            dispatch(showListAction());
        },
        selectItem: (itemName) => {
            dispatch(showItemDetailsAction(itemName));
        },
        applyItemListFilter: (search) => {
            dispatch(applyItemsListInstantFilterAction(search));
        }
    };
};

function prepareFilteredItemsList(textToFind, list) {
    return textToFind === undefined ?
        list:
        list.filter((item) => {return item.id.toString().includes(textToFind)}
        );
}

const mapStateToProps = (state) => {
    return {
        textToFind: state.itemsListReducer.textToFind,
        isLoading: state.itemsListReducer.loading,

        stateActions: {
                getItemsList: () => prepareFilteredItemsList(
                    state.itemsListReducer.textToFind,
                    state.itemsListReducer.itemsList
                )
            }

    }
}

const mapDispatchToProps = (dispatch) => { return { dispatchActions: dispatchActions(dispatch) } };

const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsListComponent);
export default ItemsListContainer;
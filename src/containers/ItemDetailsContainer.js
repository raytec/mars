import { connect } from 'react-redux';
import ItemDetailsComponent from '../components/ItemDetailsComponent';

export const mapStateToProps = (state) => {
    return {
        selectedItem: state.itemDetailsReducer.selectedItem,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {}
}

const ItemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDetailsComponent);
export default ItemDetailsContainer;
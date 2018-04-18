import { connect } from 'react-redux';
import ItemDetailsComponent from '../components/ItemDetailsComponent';

const mapStateToProps = (state) => {
    return {
        selectedItem: state.itemDetailsReducer.selectedItem,
    }
}

const mapDispatchToProps = (dispatch) => { return {} }

const ItemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDetailsComponent);
export default ItemDetailsContainer;
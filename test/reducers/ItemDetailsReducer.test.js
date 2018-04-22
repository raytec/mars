import React from 'react';
import ItemDetailsReducer from '../../src/reducers/ItemDetailsReducer';
import { ITEM_DETAILS_REQUEST } from '../../src/actions/actionTypes';

describe('Item details reducer', function() {

    it('item details request valid action', function() {
        let state = {};
        let action = { type: ITEM_DETAILS_REQUEST, selectedItem: 123};
        let nextState = ItemDetailsReducer(state, action);
        expect(nextState).toEqual({ selectedItem: 123 });
    });

    it('item details request unrecognized action', function() {
        let state = {test: 123};
        let unrecognizedAction = {};
        let resultedState = ItemDetailsReducer(state, unrecognizedAction);
        expect(resultedState).toEqual(state);
    });
});
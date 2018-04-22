import React from 'react';
import {mapStateToProps, mapDispatchToProps} from '../../src/containers/ItemDetailsContainer';

describe('Item details container mappings', function() {

    it('item details state mapping', function() {
        let state = { itemDetailsReducer: {  selectedItem: 123 } };
        let props = mapStateToProps(state);
        expect(props).toEqual({ selectedItem: 123 });
    });

    it('item details dispatch actions none', function() {
        let dispatch = undefined;
        let props = mapDispatchToProps(dispatch);
        expect(props).toEqual({});
    });

});
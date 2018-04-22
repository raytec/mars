import React from 'react';
import ItemsListReducer from '../../src/reducers/ItemsListReducer';
import {ITEMS_LIST_REQUEST} from '../../src/actions/actionTypes';
import {ITEMS_LIST_SUCCESS} from '../../src/actions/actionTypes';
import {ITEMS_LIST_INSTANT_FILTER_REQUEST} from '../../src/actions/actionTypes';
import {ITEMS_LIST_INSTANT_FILTER_SUCCESS} from '../../src/actions/actionTypes';

describe('Items list reducer', function() {

    it('items list request action', function() {
        let state = {abc: 123};
        let action = {type: ITEMS_LIST_REQUEST, selectedItem: 123};
        let nextState = ItemsListReducer(state, action);
        expect(nextState).toEqual({abc: 123, loading: true});
    });

    it('items list success response', function() {
        let state = { abc: 123};
        let action = { type: ITEMS_LIST_SUCCESS, itemsList: {list: 123}};
        let nextState = ItemsListReducer(state, action);
        expect(nextState).toEqual({abc: 123, loading: false, itemsList: {list: 123}});
    });

    it('items list instant filter request action', function() {
        let state = {abc: 123};
        let action = {type: ITEMS_LIST_INSTANT_FILTER_REQUEST};
        let nextState = ItemsListReducer(state, action);
        expect(nextState).toEqual({abc: 123});
    });

    it('items list instant filter success response', function() {
        let state = {abc: 123};
        let action = {type: ITEMS_LIST_INSTANT_FILTER_SUCCESS, search: 'searchText'};
        let nextState = ItemsListReducer(state, action);
        expect(nextState).toEqual({abc: 123, textToFind: 'searchText'});
    });

    it('items list unrecognized action', function() {
        let state = {abc: 123};
        let action = {};
        let nextState = ItemsListReducer(state, action);
        expect(nextState).toEqual({abc: 123});
    });

});
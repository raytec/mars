import React from 'react';
import {getItem} from '../ItemDataSet';
import {mapStateToProps, mapDispatchToProps} from '../../src/containers/ItemsListContainer';

describe('Item list container mappings', function() {

    it('items list state mapping', function() {
        let itemsList = [
            getItem(12, 'testName1', 'image1'),
            getItem(22, 'testName2', 'image2'),
            getItem(31, 'testName3', 'image3')
        ];
        let state = {
            itemsListReducer: {
                loading: true,
                itemsList: itemsList
            }
        };

        let props = mapStateToProps(state);

        expect(props.loading).toEqual(true);
        expect(props.textToFind).toEqual(undefined);
        expect(props.stateActions.getItemsList()).toEqual(itemsList);
    });

    it('items list with filter state mapping', function() {
        let itemsList = [
            getItem(12, 'testName1', 'image1'),
            getItem(22, 'testName2', 'image2'),
            getItem(31, 'testName3', 'image3'),
            getItem(3, 'testName3', 'image3'),
            getItem(13, 'testName3', 'image3'),
        ];
        let resultFilteredItemsList = [
            getItem(31, 'testName3', 'image3'),
            getItem(3, 'testName3', 'image3'),
            getItem(13, 'testName3', 'image3'),
        ];
        let state = {
            itemsListReducer: {
                textToFind: '3',
                loading: true,
                itemsList: itemsList
            }
        };

        let props = mapStateToProps(state);

        expect(props.loading).toEqual(true);
        expect(props.textToFind).toEqual('3');
        expect(props.stateActions.getItemsList()).toEqual(resultFilteredItemsList);
    });

    it('items list dispatch all actions', function() {

        let dispatch = (action) => {
            return action;
        }
        let props = mapDispatchToProps(dispatch);
        let res = props.dispatchActions.showList();

        expect(props.dispatchActions.showList())
            .toEqual({ type: 'ITEMS_LIST_REQUEST' });

        expect(props.dispatchActions.selectItem(12))
            .toEqual({selectedItem: 12, type: "ITEM_DETAILS_REQUEST"});

        expect(props.dispatchActions.applyItemListFilter('abc'))
            .toEqual({ search: 'abc', type: "ITEMS_LIST_INSTANT_FILTER_REQUEST"});
    });

});
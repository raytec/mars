import React from 'react';
import {mapStateToProps} from '../../src/containers/ItemsListContainer';
import {getItem} from '../ItemDataSet';

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

    it('items list filtering', function() {
        let itemsList = [
            getItem(12, 'testName1', 'image1'),
            getItem(22, 'testName2', 'image2'),
            getItem(31, 'testName3', 'image3'),
            getItem(3, 'testName3', 'image3'),
            getItem(13, 'testName3', 'image3'),
        ];
        let filteredItemsList = [
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
        expect(props.stateActions.getItemsList()).toEqual(filteredItemsList);
    });

});
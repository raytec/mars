import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {Text, Image, FlatList} from 'react-native';

import ItemsListComponent from '../src/components/ItemsListComponent';
import { getItem } from './ItemDataSet';

describe('Rendering items list', function() {

    it('items list not empty', function() {
        //given
        let item = getItem(123, 'testName', 'image1');
        let stateActions = { getItemsList: () => [item] };
        let dispatchActions = { showList: () => [item] };

        //when
        let component = shallow(
            <ItemsListComponent
                stateActions={stateActions}
                dispatchActions={dispatchActions}
            />
        );
        let renderedItem = JSON.stringify(
            component.find("FlatList[data-test='items-list']").props().renderItem({item: item})
        );

        //then
        expect(
            component.find("FlatList[data-test='items-list']").props().data
        ).toEqual([item]);

        expect(
            component.find("FlatList[data-test='items-list']").props().keyExtractor({id: 1234})
        ).toEqual('1234');

        expect(
            renderedItem.includes('testName')
        ).toBe(true);

        expect(
            renderedItem.includes('Vehicle name')
        ).toBe(true);

        expect(
            component.find("ActivityIndicator[data-test='preloader']").props().animating
        ).toBe(true);
    });

    it('items list empty', function() {
        //given
        let item = [];
        let stateActions = { getItemsList: () => [] };
        let dispatchActions = { showList: () => [] };

        //when
        let component = shallow(
            <ItemsListComponent
                stateActions={stateActions}
                dispatchActions={dispatchActions}
            />
        );
        let renderedItem = JSON.stringify(
            component.find("FlatList[data-test='items-list']").props().renderItem({item: item})
        );

        //then
        expect(
            component.find("FlatList[data-test='items-list']").props().data
        ).toEqual([]);

        expect(
            component.find("FlatList[data-test='items-list']").props().keyExtractor({id: 1234})
        ).toEqual('1234');

        expect(
            renderedItem.includes('testName')
        ).toBe(false);

        expect(
            renderedItem.includes('Vehicle name')
        ).toBe(false);

        expect(
            component.find("ActivityIndicator[data-test='preloader']").props().animating
        ).toBe(true);
    });

});
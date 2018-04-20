import React from 'react';
import {shallow} from 'enzyme';
import ItemsListComponent from '../../src/components/ItemsListComponent';
import ItemsListPositionComponent from '../../src/components/ItemsListPositionComponent';
import {getItem} from '../ItemDataSet';

describe('Rendering items list', function() {

    it('items list not empty', function() {
        let item = getItem(123, 'testName', 'image1');
        let component = shallow(crateItemListComponent(item));

        let itemComponent = shallow(
            component.find("FlatList[data-test='items-list']").props().renderItem({item: item})
        );

        expect(
            itemComponent.contains(<ItemsListPositionComponent item={item} />)
        ).toBe(true);
    });

    it('items list empty', function() {
        let item = {};
        let component = shallow(crateItemListComponent(item));

        let itemComponent = shallow(
            component.find("FlatList[data-test='items-list']").props().renderItem({item: item})
        );

        expect(
            itemComponent.contains(
                <ItemsListPositionComponent item={item} />
            )
        ).toBe(false);
    });

    it('valid work of items list preloader', function() {
        let component = shallow(crateItemListComponent({}));

        component.setProps({loading: true});
        expect(
            component.find("ActivityIndicator[data-test='preloader']").props().animating
        ).toBe(true);

        component.setProps({loading: false});
        expect(
            component.find("ActivityIndicator[data-test='preloader']").props().animating
        ).toBe(false);
    });
});

function crateItemListComponent(item) {
    let stateActions = { getItemsList: () => [item] };
    let dispatchActions = { showList: () => [item] };
    return <ItemsListComponent stateActions={stateActions} dispatchActions={dispatchActions} />;
}
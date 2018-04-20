import React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native';
import ItemsListPositionComponent from '../../src/components/ItemsListPositionComponent';
import {getItem} from '../ItemDataSet';

describe('Rendering item list position', function() {

    it('item list position with item', function() {
        let item = getItem(123, 'testName', 'image1');
        let component = shallow(<ItemsListPositionComponent item={item} />)
        expect(
            component
        ).toMatchSnapshot();
    });

    it('item list position with empty item', function() {
        let component = shallow(<ItemsListPositionComponent item={{}} />)
        expect(
            component.contains([
                <Text>Empty item</Text>
            ])
        ).toMatchSnapshot();
    });

});
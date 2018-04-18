import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {Text, Image} from 'react-native';

import ItemDetailsComponent from '../src/components/ItemDetailsComponent';

describe('Rendering item details', function() {

    it('item details with selected item', function() {
        let selectedItemProps = {
            id: 123,
            rover: {name: 'testName'},
            img_src: 'image1'
        };
        let component = shallow(<ItemDetailsComponent selectedItem={selectedItemProps} />)
        expect(
            component.contains([
                <Text>testName 123</Text>
            ])
        ).toBe(true);
    });

    it('item details without selected item', function() {
        let component = shallow(<ItemDetailsComponent selectedItem={{}} />)
        expect(
            component.contains([
                <Text>Select item from list...</Text>
            ])
        ).toBe(true);
    });

});
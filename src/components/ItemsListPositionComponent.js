import React from 'react';
import {Text, View, Image} from 'react-native';

export default class ItemsListPositionComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.item.id === undefined) {
            return ( <View><Text>Empty item</Text></View> );
        }

        return (
            <View style={{flexDirection: 'row', flex: 1}}>
                <View>
                    <Image data-test='item-details-image'
                           style={{width: 170, height: 110, padding: 10, margin: 10}}
                           source={{uri:this.props.item.img_src}}
                    />
                </View>
                <View data-test='item-details-desc'>
                    <Text data-test="item-label" style={{fontSize: 12,padding: 0, margin: 0}}>
                        {'\n'}Vehicle name:
                    </Text>
                    <Text>{this.props.item.rover.name}</Text>
                    <Text style={{fontSize: 12}}>
                        {'\n'}Photo id:
                    </Text>
                    <Text style={{fontSize: 16}}>
                        {this.props.item.id}
                    </Text>
                </View>
            </View>
        );
    }
}


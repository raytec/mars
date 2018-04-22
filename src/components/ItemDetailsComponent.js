import React from 'react';
import {Dimensions, Text, View, Image} from 'react-native';

export default class ItemDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.selectedItem.rover !== undefined) {
            return (
                <View style={{paddingTop:90, marginLeft: 10, height: Dimensions.get('window').height}}>
                    <Text>{this.props.selectedItem.rover.name} {this.props.selectedItem.id}</Text>
                    <Image
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                        }}
                        source={{uri:this.props.selectedItem.img_src}}
                    />
                </View>
            );
        }

        return (
            <View style={{paddingTop:90, marginLeft: 10}}>
                <Text>Select item from list...</Text>
            </View>
        );
    }
}
import React from 'react';
import {List} from 'react-native-elements';
import {ActivityIndicator, TextInput, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

export default class ItemsListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { textToFind: '' };
    }

    componentDidMount() {
        this.props.dispatchActions.showList();
    };

    onPressItem(item) {
        this.props.dispatchActions.selectItem(item);
        this.props.navigation.navigate('DetailsTab')
    }

    render() {

        return (
            <View style={{marginTop:40}}>
                <Text style={{margin:8}}>Search by photo id:</Text>
                <TextInput
                    onChangeText={(textToFind) => this.props.dispatchActions.applyItemListFilter(textToFind)}
                    value={this.state.textToFind}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 8}}
                />
                <List>
                    <FlatList
                        keyExtractor={(item) => item.id.toString()}
                        onEndReached={() => {this.props.dispatchActions.showList()}}
                        data={this.props.stateActions.getItemsList()}
                        renderItem={({item}) => this.renderItem(item)}
                    />
                    <ActivityIndicator
                        animating={this.props.isLoading}
                        style={[{height: 40}]}
                        color="#C00"
                        size="large"
                        hidesWhenStopped={true}
                    />
                </List>
            </View>
        );
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() => this.onPressItem(item)}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <View>
                        <Image
                            style={{width: 170, height: 110, padding: 10, margin: 10}}
                            source={{uri:item.img_src}}
                        />
                    </View>
                    <View>
                        <Text style={{fontSize: 12,padding: 0, margin: 0}}>
                            {'\n'}Vehicle name:
                        </Text>
                        <Text style={{fontSize: 16}}>
                            {item.rover.name}
                        </Text>
                        <Text style={{fontSize: 12}}>
                            {'\n'}Photo id:
                        </Text>
                        <Text style={{fontSize: 16}}>
                            {item.id}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    };
}


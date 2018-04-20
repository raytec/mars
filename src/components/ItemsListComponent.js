import React from 'react';
import {List} from 'react-native-elements';
import {
    ActivityIndicator,
    TextInput,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import ItemsListPositionComponent from './ItemsListPositionComponent';

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
            <View style={styles.container}>
                {this.renderSearch()}
                {this.renderList()}
            </View>
        );
    }

    renderList = () => {
        return (
            <List>
                <FlatList data-test='items-list'
                    keyExtractor={(item) => item.id.toString()}
                    onEndReached={() => {this.props.dispatchActions.showList()}}
                    data={this.props.stateActions.getItemsList()}
                    renderItem={({item}) => this.renderItem(item)}
                />
                <ActivityIndicator data-test='preloader'
                    animating={this.props.loading}
                    style={styles.preloader}
                    size="large"
                    hidesWhenStopped={true}
                />
            </List>
        );
    }

    renderSearch = () => {
        return (
            <View>
                <Text style={styles.searchLabel}>Search by photo id:</Text>
                <TextInput onChangeText={(textToFind) => this.props.dispatchActions.applyItemListFilter(textToFind)}
                    style={styles.searchInput}
                    value={this.state.textToFind}
                />
            </View>
        );
    }

    renderItem = (item) => {

        if (item.id === undefined) {
            return ( <View></View> );
        }

        return (
            <TouchableOpacity onPress={() => this.onPressItem(item)}>
                <ItemsListPositionComponent item={item} />
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop:40
    },
    preloader: {
        height: 800
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 8
    },
    searchLabel: {
        margin:8
    },
});
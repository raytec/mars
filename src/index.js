import React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {View, Dimensions} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import Tabs from './routes';
import allSagas from './sagas';
import allReducers from './reducers';

// init redux saga and store
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(allSagas);
////////////////////////////////////////
console.disableYellowBox = true;

class SimpleApp extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}>
                    <Tabs />
                </View>
            </Provider>
        )
    }
}

export default Application = SimpleApp;
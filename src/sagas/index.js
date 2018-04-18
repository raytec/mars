import { all } from 'redux-saga/effects';
import {watchItemsListRequest} from './itemsListSaga';
import {watchItemsListInstantFilterRequest} from './itemsListSaga';

export default function* allSagas() {
    yield all([
        watchItemsListRequest(),
        watchItemsListInstantFilterRequest()
    ]);
}
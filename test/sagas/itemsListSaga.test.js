import React from 'react';
import { put, call } from 'redux-saga/effects';
import {cloneableGenerator} from 'redux-saga/utils';
import {getItemsList} from '../../src/sagas/itemsListSaga';
import {responseHandler} from '../../src/sagas/itemsListSaga';
import {fetchPhotosList} from '../../src/sagas/itemsListSaga';
import {ITEMS_LIST_SUCCESS} from "../../src/actions/actionTypes";
import {ITEMS_LIST_FAIL} from "../../src/actions/actionTypes";

describe('Items list saga flow', function() {

    test('get items list with success', () => {
        let itemsList = [];
        const generator = cloneableGenerator(getItemsList)();

        expect(
            generator.next().value
        ).toEqual(
            call(fetchPhotosList)
        );

        expect(
            generator.next({data: {photos: []}}).value
        ).toEqual(
            put({type: ITEMS_LIST_SUCCESS, itemsList})
        );
    });

    test('get items list with error', () => {
        const generator = cloneableGenerator(getItemsList)();

        expect(
            generator.next().value
        ).toEqual(
            call(fetchPhotosList)
        );

        expect(
            generator.throw('error').value
        ).toEqual(
            put({type: ITEMS_LIST_FAIL, error: 'error'})
        );
    });
});
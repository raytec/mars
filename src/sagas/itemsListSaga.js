import axios from "axios";
import {put, takeLatest, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {ITEMS_LIST_REQUEST} from "../actions/actionTypes";
import {ITEMS_LIST_SUCCESS} from "../actions/actionTypes";
import {ITEMS_LIST_FAIL} from "../actions/actionTypes";
import {ITEMS_LIST_INSTANT_FILTER_REQUEST} from "../actions/actionTypes";
import {ITEMS_LIST_INSTANT_FILTER_SUCCESS} from "../actions/actionTypes";

const ITEM_LIST_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ioxkiilpfNQXdGEXUGHrLletXk8OjmHMDRqfLh8r';
var pageNumber = 0;
var itemsList = [];

export function responseHandler(response) {
    itemsList = itemsList.concat(response.data.photos);
}

export function fetchPhotosList() {
    return axios({
        method: "get",
        url: ITEM_LIST_URL + '&page=' + (++pageNumber)
    });
}

export function* getItemsList(action) {
    try {
        const response = yield call(fetchPhotosList);
        responseHandler(response);
        yield put({ type: ITEMS_LIST_SUCCESS, itemsList});

    } catch (error) {
        yield put({ type: ITEMS_LIST_FAIL, error });
    }
}

export function* watchItemsListRequest() {
    yield takeLatest(ITEMS_LIST_REQUEST, getItemsList);
}

function* getItemsListInstantFiltered(action) {
    yield delay(200);
    yield put({ type: ITEMS_LIST_INSTANT_FILTER_SUCCESS, search: action.search});
}

export function* watchItemsListInstantFilterRequest() {
    yield takeLatest(ITEMS_LIST_INSTANT_FILTER_REQUEST, getItemsListInstantFiltered);
}




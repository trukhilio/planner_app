import {
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    ADD_LIST_CANCELED
} from '../constants/main';
import {
    RENAME_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
    RENAME_LIST_CANCELED,
    DELETE_LIST,
    ADD_CARD_REQUEST,
    ADD_CARD_SUCCESS,
    ADD_CARD_CANCELED
} from '../constants/list';

export function addListRequest(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_LIST_REQUEST
        });
    }
}

export function addList(name, id, dispatch){
    return function(dispatch){
        if (name === ''){
            name = 'New Column'
        }
        const list = {
            nameList: name,
            idList: id,
            cards: []
        };
        dispatch({
            type: ADD_LIST_SUCCESS,
            payload: list
        });
    }
}

export function addListCanceled(dispatch){
    return function(dispatch){
        dispatch({
            type: ADD_LIST_CANCELED
        });
    }
}
export function renameListRequest(id, dispatch) {
    return function(dispatch){
        dispatch({
            type: RENAME_LIST_REQUEST,
            payload: id
        });
    }
}

export function renameListSuccess(id, name, dispatch) {
    return function(dispatch){
        dispatch({
            type: RENAME_LIST_SUCCESS,
            id,
            name
        });
    }
}


export function renameListCanceled(dispatch) {
    return function(dispatch){
        dispatch({
            type: RENAME_LIST_CANCELED,
            payload: ''
        });
    }
}
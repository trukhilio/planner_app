import {
    RENAME_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
    RENAME_LIST_CANCELED,
    DELETE_LIST,
    ADD_CARD_REQUEST,
    ADD_CARD_SUCCESS,
    ADD_CARD_CANCELED
} from '../constants/list';

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
            payload: name
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

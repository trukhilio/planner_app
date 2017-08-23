import {
    RENAME_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
    RENAME_LIST_CANCELED,
    DELETE_LIST,
    ADD_CARD_REQUEST,
    ADD_CARD_SUCCESS,
    ADD_CARD_CANCELED
} from '../constants/list';

let idItem;

export function renameListRequest(id, dispatch) {
    return function(dispatch){
        idItem = id;
        dispatch({
            type: RENAME_LIST_REQUEST,
            payload: idItem
        });
    }
}

export function renameListCanceled(dispatch) {
    return function(dispatch){
        dispatch({
            type: RENAME_LIST_CANCELED
        });
    }
}

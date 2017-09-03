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
    ADD_CARD_CANCELED,
    MOVE_LIST
} from '../constants/list';
import {
    RENAME_CARD_REQUEST,
    RENAME_CARD_SUCCESS,
    RENAME_CARD_CANCELED,
    DELETE_CARD,
    MOVE_CARD
} from '../constants/card';


export function addListRequest(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_LIST_REQUEST
        });
    }
}

export function addList(name, id, dispatch){
    return function(dispatch){
        dispatch({
            type: ADD_LIST_SUCCESS,
            name,
            id
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

export function deleteList(id, dispatch) {
    return function (dispatch) {
        dispatch({
            type: DELETE_LIST,
            id
        })
    }
}

export function addCardRequest(id, dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_CARD_REQUEST,
            id
        });
    }
}
export function addCard(name, idCard, idList, dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_CARD_SUCCESS,
            name,
            idCard,
            idList
        });
    }
}
export function addCardCanceled(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_CARD_CANCELED
        });
    }
}
export function renameCardRequest(id, dispatch) {
    return function(dispatch){
        dispatch({
            type: RENAME_CARD_REQUEST,
            id
        });
    }
}
export function renameCardSuccess(idCard, idList, name, dispatch) {
    return function(dispatch){
        dispatch({
            type: RENAME_CARD_SUCCESS,
            idCard,
            idList,
            name
        });
    }
}
export function renameCardCanceled(dispatch) {
    return function(dispatch){
        dispatch({
            type: RENAME_CARD_CANCELED
        });
    }
}
export function deleteCard(idCard, idList, dispatch) {
    return function(dispatch){
        dispatch({
            type: DELETE_CARD,
            idCard,
            idList
        });
    }
}

export function moveCard(indexCard,indexList,indexCardTarget,indexListTarget, dispatch){
    return function(dispatch){
        dispatch({
            type: MOVE_CARD,
            indexCard,
            indexList,
            indexCardTarget,
            indexListTarget
        })
    }
}

export function moveList(indexList,indexListTarget, dispatch){
    return function (dispatch) {
        dispatch({
            type: MOVE_LIST,
            indexList,
            indexListTarget
        })
    }
}


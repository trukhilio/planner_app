import {
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    ADD_LIST_CANCELED
} from '../constants/main';

const listArr = [];

export function addListRequest(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_LIST_REQUEST
        });
    }
}

export function addList(name, id, dispatch){
    return function(dispatch){
        if (name || id){
            if (name === '' || 'undefined'){
                name = 'New Column'
            }
            const list = {
                nameList: name,
                idList: id
            };
            listArr.push(list);
            dispatch({
                type: ADD_LIST_SUCCESS,
                payload: listArr
            });
        }
    }
}

export function addListCanceled(dispatch){
    return function(dispatch){
        dispatch({
            type: ADD_LIST_CANCELED
        });
    }
}
import {
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    ADD_LIST_CANCELED
} from '../constants/main';

export function addList(dispatch) {
    return function(dispatch){
        dispatch({
            type: ADD_LIST_REQUEST
        });
    }
}
import {
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    ADD_LIST_CANCELED
} from '../constants/main';

const initialState = {
    newAdd: false,
    listArr: []
};

export default function main(state=initialState, action){
    switch (action.type) {
        case ADD_LIST_REQUEST:
            return { ...state, newAdd: true };
        case ADD_LIST_SUCCESS:
            return { ...state, newAdd: false, listArr: action.payload };
        case ADD_LIST_CANCELED:
            return { ...state, newAdd: false };
        default:
            return state;
    }
}
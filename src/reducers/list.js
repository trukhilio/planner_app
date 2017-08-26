import {
    RENAME_LIST_REQUEST,
    RENAME_LIST_SUCCESS,
    RENAME_LIST_CANCELED,
    DELETE_LIST,
    ADD_CARD_REQUEST,
    ADD_CARD_SUCCESS,
    ADD_CARD_CANCELED
} from '../constants/list';

const initialState = {
    changerName: false,
    idItem: ''
};

export default function list(state=initialState, action){
    switch (action.type) {
        case RENAME_LIST_REQUEST:
            return { ...state, changerName: true, idItem: action.payload };
        case RENAME_LIST_SUCCESS:
            return { ...state, changerName: false, listArr: action.payload };
        case RENAME_LIST_CANCELED:
            return { ...state, changerName: false, idItem: action.payload };

        default:
            return state;
    }
}


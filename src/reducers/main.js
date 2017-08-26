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

const initialState = {
    newAdd: false,
    changerName: false,
    idItem: '',
    listArr: []
};

export default function main(state=initialState, action){
    switch (action.type) {
        case ADD_LIST_REQUEST:
            return { ...state, newAdd: true };
        case ADD_LIST_SUCCESS:
            let newItem =  state.listArr.concat(action.payload);
            return { ...state, newAdd: false, listArr: newItem };
        case ADD_LIST_CANCELED:
            return { ...state, newAdd: false };
        case RENAME_LIST_REQUEST:
            return { ...state, changerName: true, idItem: action.payload };
        case RENAME_LIST_SUCCESS:
            let renameItem = state.listArr.map(item=>
                item.idList === action.id ?
                    {...item, nameList: action.name}:
                    item
            );
            return { ...state, changerName: false, idItem: '', listArr: renameItem};
        case RENAME_LIST_CANCELED:
            return { ...state, changerName: false, idItem: action.payload };
        default:
            return state;
    }
}